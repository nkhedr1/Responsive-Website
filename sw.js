let staticCache = 'my-Cache-5';

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
					return cacheName.startsWith('my') && cacheName !== staticCache
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(staticCache).then(function(cache) {
			return cache.addAll(
				[
					'css/styles.css',
					'js/app.js',
          'index.html',
				]
			);
		})
	);
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});