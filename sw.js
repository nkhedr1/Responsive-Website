let staticCache = 'my-Cache-4';

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
					// 'css/styles.css',
					// 'js/app.js',
          // 'index.html',
          'https://github.com/nkhedr1/My_Portfolio/blob/master/js/app.js',
          'https://github.com/nkhedr1/My_Portfolio/blob/master/index.html',
          'https://github.com/nkhedr1/My_Portfolio/blob/master/css/styles.css'

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


https://github.com/nkhedr1/My_Portfolio/blob/master/js/app.js