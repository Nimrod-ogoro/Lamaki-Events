const CACHE_NAME = "ldevents-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/favicon.ico",
  "/manifest.json",
  "/assets/logo.png"
];

// Install: Cache essential files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

// Activate: Cleanup old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(key => key !== CACHE_NAME && caches.delete(key)))
    )
  );
  self.clients.claim();
});

// Fetch: Cache-first for images/videos, network-first for others
self.addEventListener("fetch", event => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== "GET") return;

  // For images/videos → cache-first
  if (request.destination === "image" || request.destination === "video") {
    event.respondWith(
      caches.match(request).then(cached =>
        cached ||
        fetch(request).then(response => {
          const cloned = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, cloned));
          return response;
        })
      )
    );
    return;
  }

  // For other requests → network-first
  event.respondWith(
    fetch(request)
      .then(response => {
        const cloned = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, cloned));
        return response;
      })
      .catch(() => caches.match(request))
  );
});
