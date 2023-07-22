/* eslint-disable unicorn/prefer-add-event-listener,unicorn/no-null,func-names */
import { getWindow, getDocument } from './external';
import { emitError } from './events';

export const removeElement = <T extends Element>(el: T): T | undefined => el.parentElement?.removeChild(el);
export const find = (selector: string): Element | null => getDocument().querySelector(selector);

// allow minification by moving to function
const set = (el: Element, key: string, value: string) => el.setAttribute(key, value);

// afaik, works in all browsers
const invisibleStyle =
  'display:block; visibility:hidden; height:0; width:0; left:0; top:0; position:absolute; opacity:0';

/**
 * Creates an iframe element with no height, width, border, and has an invisible style.
 * NOTE: Does not add to DOM.
 * NOTE: Cannot be block:none because then the page may not be loaded.
 */
function createInvisibleIFrame() {
  const el = getDocument().createElement('iframe');
  set(el, 'frameborder', '0');
  set(el, 'width', '0');
  set(el, 'height', '0');
  set(el, 'style', invisibleStyle);
  return el;
}

/**
 * Assume that all pages will have a body (never null)
 */
export const getBody = (): HTMLBodyElement => find('body') as NonNullable<HTMLBodyElement>;

/**
 * Guarantees that only one iframe with a particular id exists.
 */
export function createIFrameWithId(id: string, src?: string): HTMLIFrameElement {
  let iframe = find(`#${id}`) as HTMLIFrameElement | null;

  // If the iframe already exists, remove it.  The event listeners could cause problems if we're loaded twice.
  if (iframe) {
    removeElement(iframe);
  }

  iframe = createInvisibleIFrame();
  iframe.id = id;
  iframe.src = src ?? 'about:blank';

  return iframe;
}

/**
 * Triggers only once when the iframe finishes loading its content
 */
export function onIFrameLoadOnce(iframe: HTMLIFrameElement, fn: (el: HTMLIFrameElement) => void): void {
  iframe.onload = function () {
    iframe.onload = null;
    setTimeout(() => fn(iframe), 0);
  };
}

/**
 * Triggers when the window receives a message that matches the origin filter.
 *
 * @param originFilter - Only respond to messages with a matching location.origin
 * @param fn - called when event occurs
 */
export function onWindowMessage(originFilter: string, fn: (data: string) => void): void {
  getWindow().addEventListener(
    'message',
    (_event: Event) => {
      try {
        // because of TypeScript madness; the MessageEvent isn't well defined in their lib.
        const event = _event as MessageEvent<unknown>;
        const { data, origin } = event;

        // standardize backslashes (we assume we did the same to the originFilter)
        const normalizedOrigin = new URL(origin).toString();

        // only respond to message meant for this window and domain, and that we created (has a prefix)
        if (normalizedOrigin === originFilter && typeof data === 'string') {
          fn(data);
        }
      } catch (error) {
        emitError(error as Error);
      }
    },
    false
  );
}

/**
 * Posts a message to an iframe
 */
export function postMessage(el: HTMLIFrameElement, msg: string, expectedUrl: string): void {
  el.contentWindow?.postMessage(msg, expectedUrl);
}

/**
 * Returns all cookies that are visible to JavaScript as an object map.
 */
export function getCookies(doc: typeof document): Record<string, string> {
  const entries = doc.cookie.split('; ').map((x) => x.split('='));

  return Object.fromEntries(entries);
}
