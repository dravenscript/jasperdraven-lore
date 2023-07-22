import { find, onWindowMessage, postMessage } from './dom';
import { getIdHint, getSessionState } from './cookies';
import { createCheckSessionIFrame } from './check-session';
import { createRiotOwnedIFrame } from './riot-owned';
import { emitEvent, parseEventString, state, XSSOState } from './events';
import { getWindow } from './external';

let interval: number;
let origin: string;
let scope: string;
let client_id: string;

type InitOptions = {
  origin: string;
  client_id: string;
  scope?: string;
  issuer: string;
  interval?: number;
};

/**
 * Safety.
 *
 * We're using timeout so that any problems or error will end the cycle.
 * We're removing extra timeouts so that we never spam the service or get runaway processes in debugging
 */
let timeoutRef: number | undefined;
export function poll(): void {
  emitEvent('polling');

  const iframe = find('#check-session') as HTMLIFrameElement | null;
  // something might have happened to remove it from the DOM
  if (!iframe) {
    emitEvent('poll_aborted', 'missing iframe');
    return;
  }

  const sessionState = getSessionState();
  if (!sessionState) {
    createRiotOwnedIFrame(origin, client_id, scope);
    return;
  }

  postMessage(iframe, `${client_id} ${sessionState}`, origin);
}

function requestPoll() {
  // only one allowed to run at a time
  if (timeoutRef !== undefined) {
    clearTimeout(timeoutRef);
  }

  // if no exceptions, try again after some interval
  timeoutRef = getWindow().setTimeout(poll, interval);
}

export function attemptLoginPromptNone(): void {
  createRiotOwnedIFrame(origin, client_id, scope);
}

/**
 * Returns the contents of the __Secure--id_hint cookie
 * @example const info = xsso.id();
 */
export function id(): Record<string, any> | undefined {
  const lastState = state();

  // guard against implementators using this for id when it hasn't been verified
  if (!(lastState === XSSOState.Set || lastState === XSSOState.Unchanged || lastState === XSSOState.Limited)) {
    return undefined;
  }

  return getIdHint();
}

function handleUnsupported() {
  if (getIdHint()) {
    emitEvent('limited', 'known but unable to poll session or login through iframe');
  } else {
    emitEvent('login_required', 'unknown to local domain and unknown to issuer');
  }
}

/**
 * @example window.xsso.init({
 *   client_id: 'xsso-dev-test',
 *   issuer: 'dev.auth.accounts.riotgames.com',
 *   authOrigin: 'auth.playvalorant.com'
 * });
 */
export function init(options: InitOptions): void {
  origin = new URL(options.origin).toString();
  client_id = options.client_id;
  interval = options.interval ?? 15000;
  scope = options.scope ?? 'openid account';

  const sessionOptions: Record<string, () => void> = {
    not_found: () => emitEvent('login_required', 'unknown to issuer'),
    unsupported: handleUnsupported,
    unchanged: requestPoll,
    /** Specificly for when we've been assigned new auth cookies, start polling
    Assumes fail-safes to prevent double-polling */
    set: requestPoll,
    changed: () => createRiotOwnedIFrame(origin, client_id, scope),
    error: () => emitEvent('poll_aborted', 'unknown error in check-session iframe')
  };

  createCheckSessionIFrame(origin);

  onWindowMessage(origin, (data: string) => {
    // there are a lot of messages on windows, but we only want messages for us.
    const prefix = 'XSSO::';
    if (!data.startsWith(prefix)) {
      return;
    }
    data = data.slice(prefix.length);

    const [type, ...rest] = parseEventString(data);

    // if the result is a session message
    if (type in sessionOptions) {
      sessionOptions[type]();
    }

    emitEvent(type, ...rest);
  });
}

export { onEvent, state } from './events';
