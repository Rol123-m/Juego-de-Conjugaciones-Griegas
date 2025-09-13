const cacheName = 'griego-juegos-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/presente.html',
  '/imperfecto.html',
  '/futuro.html',
  '/aoristoPasivo.html',
  '/aoristoActivo.html',
  '/perfecto.html',
  '/mega.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
