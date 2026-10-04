const CACHE='balancepath-v2';
const ASSETS=['./','./kucni-budzet-prototip.html','./manifest.webmanifest','./logo.png','./logo-secondary.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(x=>{const copy=x.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return x}).catch(()=>caches.match('./kucni-budzet-prototip.html')))));
