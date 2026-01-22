const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  // 如果你有 CSS 或 JS 檔案，也要列在這裡
  // './style.css',
  // './script.js',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// 安裝 Service Worker 並快取檔案
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// 攔截網路請求：有快取就用快取，沒快取才上網抓
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
