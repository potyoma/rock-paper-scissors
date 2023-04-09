let CACHE_NAME = "my-site-cache-v1"
const urlsToCache = ["/", "/index.html"]

self.addEventListener("install", event => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  )
  self.skipWaiting()
})

self.addEventListener("fetch", event =>
  event.respondWith(
    caches
      .match(event.request)
      .then(response => response ?? fetch(event.request))
  )
)