(() => {

    self.addEventListener('fetch', event => {
        console.log(`Fetch event for ${event.request.url}`);
        if (event.request.url.includes("index.html")) {
            event.respondWith(
                fetch(event.request).catch(() => {
                    return new Response(`<h1>Welcome</h1><p>You seem to be offline</p>`,
                        {headers: {"Content-Type": "text/html; charset=UTF-8"}}
                    )
                })
            )
        }
    })
})()