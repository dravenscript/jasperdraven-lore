import { getCookies } from './dom';
import { emitError } from './events';
import { getDocument } from './external';

export const idHintCookieKey = '__Secure-id_hint';
export const sessionStateCookieKey = '__Secure-session_state';

export function getIdHint(): Record<string, any> | undefined {
  try {
    const value = getCookies(getDocument())[idHintCookieKey];
    if (value) {
      const jsonValue = JSON.parse(decodeURIComponent(value));
      if (typeof jsonValue === 'object' && jsonValue !== null) {
        return jsonValue;
      }
    }
  } catch (error) {
    emitError(error as Error);
  }
  return undefined;
}

/**
 * @return string | undefined
 */
export function getSessionState(): string | undefined {
  try {
    const value = getCookies(getDocument())[sessionStateCookieKey];
    if (value) {
      return decodeURIComponent(value);
    }
  } catch (error) {
    emitError(error as Error);
  }
  return undefined;
}

export default {};
