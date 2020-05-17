const cacheName = 'pwa-hello';
const filesToCache = [
  '/',
  '/index.html',
  '/main.js',
  '/style.css'
]

// cache all content
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache)
    })
  )
})



// serve content in cache if using offline

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request)
    })
  )
})