/* eslint-disable unicorn/no-array-reduce */

/**
 * If an event occurs that matches one of these states
 */
export enum XSSOState {
  Init = 'init',
  Set = 'set',
  Unchanged = 'unchanged',
  PollAborted = 'poll_aborted',
  LoginRequired = 'login_required',
  Limited = 'limited'
}

/**
 * Used to do a quick lookup if the event is a XSSOState.
 */
const XSSOStateValueMap = Object.values(XSSOState).reduce<Record<string, true | undefined>>((obj, value) => {
  obj[value] = true;
  return obj;
}, {});

/**
 * Attempts to run a function with some arguments.
 */
const attempt =
  (...args: any[]) =>
  (fn: (...params: any[]) => void) => {
    try {
      fn(...args);
    } catch (error) {
      // if something broke here, we _really_ messed up.
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

/**
 * The last XSSOState event that was emitted.
 */
let lastState: XSSOState = XSSOState.Init;

/**
 * Events that are a XSSOState are persisted to this variable. Use this to determine if a
 * 'set', 'unchanged' or some other event has occurred before you started listening for events.
 */
export const state = (): XSSOState => lastState;

/**
 * Generic handler for onEvent
 */
type Handler = (type: string | Error, msg?: string) => void;

/**
 * List of listeners that were added via onEvent
 */
const listeners = [] as Handler[];

/**
 * Runs the fn after any internal event.
 */
export const onEvent = (fn: Handler): number => listeners.push(fn);

/**
 * Emits an error
 */
export const emitError = (ex: Error): void => listeners.forEach(attempt('error', ex));

/**
 * Emit an event, passing through the args.
 * If the event type matches a string in XSSOStates, will save the type to 'state'.
 */
export const emitEvent = (type: string, ...args: (string | undefined)[]): void => {
  // if it is in this list, change the state to be this type
  if (XSSOStateValueMap[type]) {
    lastState = type as XSSOState;
  }
  listeners.forEach(attempt(type, ...args));
};

/**
 * When events are emitted from an iframe, the event type has to be extracted from the description.
 */
export const parseEventString = (eventString: string): string[] => {
  const index = eventString.indexOf(' ');

  if (index !== -1) {
    return [eventString.slice(0, index), eventString.slice(index + 1)];
  }

  return [eventString];
};
