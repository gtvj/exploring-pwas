if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker-cache-everything/service-worker.js')
        .then(registration => {
            console.log(`ServiceWorker registration successful with scope: ${registration.scope}`);
        }).catch(err => {
        console.log(`ServiceWorker registration failed: ${err}`);
    });
}