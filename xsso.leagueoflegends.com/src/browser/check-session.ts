import { createIFrameWithId, getBody, onIFrameLoadOnce } from './dom';
import { emitEvent } from './events';

/**
 * Create an iframe to check the login session of the player.
 * @param origin - i.e., https://xsso.riotgames.com
 */
export function createCheckSessionIFrame(origin: string): HTMLIFrameElement {
  const src = `${origin}check-session-iframe`;
  const iframe = createIFrameWithId('check-session', src);
  onIFrameLoadOnce(iframe, () => {
    emitEvent('loaded', src);
  });
  getBody().append(iframe);
  return iframe;
}

export default {};
