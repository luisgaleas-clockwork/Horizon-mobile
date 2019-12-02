const FILES_TO_CACHE = [
	"/",
	"/assets/css/style.css",
	"/assets/loadImages.js",
	"/assets/images/icons/icon-72x72.png",
	"/assets/images/icons/icon-96x96.png",
	"/assets/images/icons/icon-128x128.png",
	"/assets/images/icons/icon-144x144.png",
	"/assets/images/icons/icon-152x152.png",
	"/assets/images/icons/icon-192x192.png",
	"/assets/images/icons/icon-384x384.png",
	"/assets/images/icons/icon-512x512.png",
	"/assets/images/Horizon-1-icon.png"
];

const CACHE_NAME = "luis";
const DATA_CACHE_NAME = "data-luis";
self.addEventListener("install", function(evt) {
	evt.waitUntil(
		caches.open(CACHE_NAME).then(cache => {
			console.log("Your files were pre-cached successfully!");
			return cache.addAll(FILES_TO_CACHE);
		})
	);
	self.skipWaiting();
});
self.addEventListener("activate", function(evt) {
	evt.waitUntil(
		caches.keys().then(keyList => {
			return Promise.all(
				keyList.map(key => {
					if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
						console.log("Removing old cache data", key);
						return caches.delete(key);
					}
				})
			);
		})
	);
	self.clients.claim();
});
self.addEventListener("fetch", function(evt) {
	if (evt.request.url.includes("/api/")) {
		evt.respondWith(
			caches
				.open(DATA_CACHE_NAME)
				.then(cache => {
					return fetch(evt.request)
						.then(response => {
							if (response.status === 200) {
								cache.put(evt.request.url, response.clone());
							}
							return response;
						})
						.catch(err => {
							return cache.match(evt.request);
						});
				})
				.catch(err => {
					console.log(err);
				})
		);
		return;
	}
	evt.respondWith(
		caches.open(CACHE_NAME).then(cache => {
			return cache.match(evt.request).then(response => {
				return response || fetch(evt.request);
			});
		})
	);
});
