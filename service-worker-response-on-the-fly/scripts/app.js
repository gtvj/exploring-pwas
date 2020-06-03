// Object detection for ServiceWorker
if ('serviceWorker' in navigator) {
    // Register our service worker once the load event has been triggered
    window.addEventListener('load', () => {
        navigator
            .serviceWorker
            .register('/service-worker-response-on-the-fly/service-worker.js')
            .then(() => {
                console.log("Registration of 'on the fly' service worker successful");
            })
            .catch(() => {
                console.error("Registration of service-worker.js failed")
            })
    });
}