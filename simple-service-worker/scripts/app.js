// Object detection for ServiceWorker
if ('serviceWorker' in navigator) {
    // Register our service worker once the load event has been triggered
    window.addEventListener('load', () => {
        navigator
            .serviceWorker
            .register('/simple-service-worker/scripts/service-worker.js')
            .then(() => {
                console.log("Registration successful");
            })
            .catch(() => {
                console.error("Registration of service-worker.js failed")
            })
    });
}