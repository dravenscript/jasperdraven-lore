import { createIFrameWithId, getBody, postMessage, onIFrameLoadOnce } from './dom';

/**
 * @param origin - The domain where we can assume /riot-owned-iframe is hosted
 * @param client_id
 * @param scope
 */
export function createRiotOwnedIFrame(origin: string, client_id: string, scope: string): HTMLIFrameElement {
  const src = `${origin}riot-owned-iframe`;
  const iframe = createIFrameWithId('riot-owned', src);

  onIFrameLoadOnce(iframe, () =>
    postMessage(iframe, `prompt=none&response_type=code&client_id=${client_id}&scope=${scope}`, src)
  );

  getBody().append(iframe);
  return iframe;
}

export default {};
