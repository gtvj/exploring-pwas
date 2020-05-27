const cache_list = [
    'index.html',
    'images/cartographer.png',
    'images/logo-white.png',
    'favicon.png',
    'styles/styles.css',
    'scripts/app.js'
]

self.addEventListener("install", event => {
    caches.open("PRECACHE")
        .then(cache => {
            cache.addAll(cache_list)
                .then(() => {
                    console.log('cache_list URLs added to cache');
                })
        })
        .catch(err => {
            console.log(`Error in Service Worker install: ${err}`);
        });
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    // If it's in the cache return that
                    return response;
                }
                // If it's not in the cache, fetch it.
                return fetch(event.request);
            })
            .catch(err => {
                console.log(`Error in Service Worker fetch: ${err}`);
            })
    );
});