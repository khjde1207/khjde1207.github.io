'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"splash/img/light-1x.png": "7114c04ea6c5adccd5df2b495931e246",
"splash/img/light-3x.png": "1bcedbe24cb0cd19bcff885f06697290",
"splash/img/light-2x.png": "0afd2af3233e711b38e650f392fc7f75",
"splash/img/dark-2x.png": "0afd2af3233e711b38e650f392fc7f75",
"splash/img/dark-4x.png": "e726e6ac2fb3ca26e8b7bef12ae09248",
"splash/img/dark-3x.png": "1bcedbe24cb0cd19bcff885f06697290",
"splash/img/dark-1x.png": "7114c04ea6c5adccd5df2b495931e246",
"splash/img/light-4x.png": "e726e6ac2fb3ca26e8b7bef12ae09248",
"splash/style.css": "309d4f23e7374c48a609008fb79e6e99",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"favicon.png": "2f3810907409a88d049222a5e4904ded",
"index.html": "bc18a0e547f53e4dc1f35c6933184ee1",
"/": "bc18a0e547f53e4dc1f35c6933184ee1",
"assets/NOTICES": "fa1d971e1093472680470535b0b6c453",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "744f7ebf52dca97922814c3045170713",
"assets/assets/brand_snstop.png": "19a831f6798979fbcac2017f32ef8fb2",
"assets/assets/chrome-icon.png": "892804af734438f55e9e9a3a82372d6f",
"assets/assets/lottie/background.json": "1b25492a612cecd34bcfa8639a319ad4",
"assets/assets/lottie/tts.json": "696da92410961af3baf88b32f6888390",
"assets/assets/lottie/text.json": "42c1e12edfe982cea1a1164da3bb91fe",
"assets/assets/lottie/theme.json": "a01abdbb867579166526f2b456f4c829",
"assets/assets/tessdata_config.json": "a9b5e429644bc5903610c71a192cf4ec",
"assets/assets/opera-icon.png": "90af9736504bce2c6d211a764ea153d9",
"assets/assets/firefox-icon.png": "df6ec9e9fe1cd9552be010ba94fffed0",
"assets/assets/edge_icon.png": "b137a56222b63bb57ca9fb2eafea84dd",
"assets/assets/splash.png": "23b9553503d191ba77897300c6a5f66b",
"assets/assets/Safari-icon.png": "e7c97e6947e98f3b781ef122a857afc6",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "6ddca61f03944b33ce9eb6974f399db8",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"adview.html": "32a302b207fafdc939ca916ce9c1e75e",
"manifest.json": "7f41d21389974baf32b35f4b6765c877",
"version.json": "da9c6f60a737e961f2f12f294748478a",
"main.dart.js": "b3a7a968a6d4e6276c16441cd6bb687b",
"icons/icon-192.png": "018d0887ee5b02426199d40cafb94c36",
"icons/icon-192-maskable.png": "3a33ad3f6be5b85e349e98afa84e0fb8",
"icons/icon-512.png": "e7deaa9529c77f37c531f63f1a466e50",
"icons/apple-touch-icon.png": "185f3df68928ce6e077929a580a09d73",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/favicon.ico": "29a6ee4612f53daba252c8db073d6403",
"icons/icon-512-maskable.png": "2f3810907409a88d049222a5e4904ded"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
