(() => {

    self.addEventListener('install', event => {
        // The install event is fired at the end of registration
        console.log('Service Worker installed');
    })

    self.addEventListener('activate', event => {
        // The 'activate' event signals the Service Worker is ready to take over
        console.log('Service Worker activated');
    })

    self.addEventListener('fetch', event => {
        console.log(`Fetch event for ${event.request.url}`);

        if (/pwa-light.png/.test(event.request.url)) {
            event.respondWith(fetch('/service-worker-events/pwa-dark.png'))
        }
    })
})()