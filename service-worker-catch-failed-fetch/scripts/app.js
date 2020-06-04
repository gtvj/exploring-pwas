// Object detection for ServiceWorker
if ('serviceWorker' in navigator) {
    // Register our service worker once the load event has been triggered
    window.addEventListener('load', () => {
        navigator
            .serviceWorker
            .register('/service-worker-catch-failed-fetch/service-worker.js')
            .then(() => {
                console.log("Registration of 'on the fly' service worker successful");
            })
            .catch(() => {
                console.error("Registration of service-worker.js failed")
            })
    });
}