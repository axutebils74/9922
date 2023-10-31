self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('9922').then(function (cache) {
            return cache.addAll(["index.html","9922.html"]);
        })
    );
});
// by chatgpt
self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            if (response) { return response; }
            return fetch(e.request).then(function (response) {
                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }
                var clonedResponse = response.clone();
                caches.open('9922').then(function (cache) {
                    cache.put(e.request, clonedResponse);
                });
                return response;
            });
        })
    );
});
