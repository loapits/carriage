const staticCacheName = 'static-cache-v1.5';
const dynamicCacheName = 'dynamic-cache-v1.5';

const staticAssets = [
  './',
  './index.html',
  './offline.html',
  './img/icons/favicon.png',
  './img/icons/pwaimages/icon-128x128.png',
  './img/icons/pwaimages/icon-192x192.png',
  './css/style.css',
  './css/queries-mobile.css',
  './css/queries-desktop.css',
  './app.js',
  './js/script.js',
  './js/test-fetch.js',
  './js/volume.js',
  './js/mobile-menu.js',
  './img/stub.jpg',
  './img/icons/wifi.png'
];


self.addEventListener('install', async event => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(staticAssets);
  console.log('Service worker has been installed');
});

self.addEventListener('activate', async event => {
  const cachesKeys = await caches.keys();
  const checkKeys = cachesKeys.map(async key => {
      if (![staticCacheName, dynamicCacheName].includes(key)) {
          await caches.delete(key);
      }
  });
  await Promise.all(checkKeys);
  console.log('Service worker has been activated');
});

self.addEventListener('fetch', event => {
  console.log(`Trying to fetch ${event.request.url}`);
  event.respondWith(checkCache(event.request));
});

async function checkCache(req) {
  const cachedResponse = await caches.match(req);
  return cachedResponse || checkOnline(req);
}

async function checkOnline(req) {
  const cache = await caches.open(dynamicCacheName);
  try {
      const res = await fetch(req);
      await cache.put(req, res.clone());
      return res;
  } catch (error) {
      const cachedRes = await cache.match(req);
      if (cachedRes) {
          return cachedRes;
      } else if (req.url.indexOf('.html') !== -1) {
          return caches.match('./offline.html');
      } else {
          return caches.match('./img/stub.jpg');
      }
  }
}