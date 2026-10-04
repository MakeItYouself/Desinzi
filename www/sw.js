const CACHE_NAME = 'desinzi-zero-humo-app-v55';
const APP_SHELL = [
  './', './index.html', './styles.css', './app.js', './manifest.webmanifest',
  './assets/logo.svg', './assets/logo.png', './data/knowledge.json', './data/source-registry.json'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith('desinzi-zero-humo-app-') && k !== CACHE_NAME).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== self.location.origin) return;
  const isNavigation=req.mode==='navigate' || (req.headers.get('accept')||'').includes('text/html');
  event.respondWith(
    isNavigation
      ? fetch(req).then(response=>{if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)).catch(()=>{});}return response;}).catch(()=>caches.match(req).then(c=>c||caches.match('./index.html')))
      : caches.match(req).then(cached=>{
          const network=fetch(req).then(response=>{
            if(response&&response.ok){const copy=response.clone();caches.open(CACHE_NAME).then(cache=>cache.put(req,copy)).catch(()=>{});}
            return response;
          }).catch(()=>cached);
          return cached||network;
        })
  );
});
