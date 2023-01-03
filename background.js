self.addEventListener('fetch', event => {
    // Check if the request is a navigation preload request
    if (event.preloadResponse) {
        event.waitUntil(async function () {
            // Get the response from the preload request
            const response = await event.preloadResponse;
            // Do something with the response
            // ...
        }());
    }
});
