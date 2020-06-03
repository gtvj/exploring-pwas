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

        if (event.request.url.includes("style.css")) {
            console.log('Intercepted call to boilerstrap');

            event.respondWith(
                new Response(
                    "body {background: green!important;} div {outline:40px solid pink;}",
                    {headers: {"Content-Type": "text/css"}}
                )
            );
        } else if (event.request.url.includes("script.js")) {

            let response_body = `
                let heading = document.getElementsByTagName('h1')[0];
                let initial_text = heading.innerHTML;
                heading.innerHTML =  initial_text + ' - appended by service worker';
            `

            event.respondWith(
                new Response(
                    response_body,
                    { headers: {"Content-Type": "application/javascript; charset=UTF-8"}}
                )
            )
        } else {
            console.log(`Request for ${event.request.url}`)
        }
    })
})()