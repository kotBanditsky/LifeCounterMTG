const staticDevCoffee = "Life-Counter-MTG"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/icons/coffee1.jpg",
  "/icons/coffee2.jpg",
  "/icons/coffee3.jpg",
  "/icons/coffee4.jpg",
  "/sound/click.mp4",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })