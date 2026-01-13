import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    return await getAssetFromKV(event);
  } catch {
    return await getAssetFromKV(event, {
      mapRequestToAsset: req => new Request('/index.html', req)
    });
  }
}