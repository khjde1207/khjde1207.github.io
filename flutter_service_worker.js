'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/assets/tessdata_config.json": "a9b5e429644bc5903610c71a192cf4ec",
"assets/assets/splash.png": "23b9553503d191ba77897300c6a5f66b",
"assets/assets/brand_snstop.png": "19a831f6798979fbcac2017f32ef8fb2",
"assets/assets/firefox-icon.png": "df6ec9e9fe1cd9552be010ba94fffed0",
"assets/assets/Safari-icon.png": "e7c97e6947e98f3b781ef122a857afc6",
"assets/assets/opera-icon.png": "90af9736504bce2c6d211a764ea153d9",
"assets/assets/edge_icon.png": "b137a56222b63bb57ca9fb2eafea84dd",
"assets/assets/lottie/file-loading.json": "bbec956017f0f7226a0ad0769442af7c",
"assets/assets/lottie/tts.json": "696da92410961af3baf88b32f6888390",
"assets/assets/lottie/text.json": "42c1e12edfe982cea1a1164da3bb91fe",
"assets/assets/lottie/theme.json": "a01abdbb867579166526f2b456f4c829",
"assets/assets/lottie/linkd.json": "ba239ad6071c5b66de84109b15fea81f",
"assets/assets/lottie/adLoading.json": "65cb43a16cf2762d7bf3e051bfd62f4a",
"assets/assets/lottie/background.json": "1b25492a612cecd34bcfa8639a319ad4",
"assets/assets/chrome-icon.png": "892804af734438f55e9e9a3a82372d6f",
"assets/AssetManifest.json": "4244f2abe1b2fffa19c312587cdada0c",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "6d3b1e7286f2deade64f1e91ba950594",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"manifest.json": "7f41d21389974baf32b35f4b6765c877",
"main.dart.js": "4629b4273f0bbc06c13fa6364537caab",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"favicon.png": "2f3810907409a88d049222a5e4904ded",
"version.json": "bfa131561b2ea9350c542035f85f3ed1",
"icons/icon-192.png": "018d0887ee5b02426199d40cafb94c36",
"icons/icon-512.png": "e7deaa9529c77f37c531f63f1a466e50",
"icons/favicon.ico": "29a6ee4612f53daba252c8db073d6403",
"icons/apple-touch-icon.png": "185f3df68928ce6e077929a580a09d73",
"icons/icon-192-maskable.png": "3a33ad3f6be5b85e349e98afa84e0fb8",
"icons/icon-512-maskable.png": "2f3810907409a88d049222a5e4904ded",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/dark-1x.png": "da3192864900969498da7adb007bec4a",
"splash/img/dark-3x.png": "4a1bd3f70f94ed6d4f1c11f116fe6927",
"splash/img/dark-4x.png": "e726e6ac2fb3ca26e8b7bef12ae09248",
"splash/img/dark-2x.png": "adeb0650a7bf6efe68458f3dc9c07046",
"splash/img/light-3x.png": "4a1bd3f70f94ed6d4f1c11f116fe6927",
"splash/img/light-2x.png": "adeb0650a7bf6efe68458f3dc9c07046",
"splash/img/light-1x.png": "da3192864900969498da7adb007bec4a",
"splash/img/light-4x.png": "e726e6ac2fb3ca26e8b7bef12ae09248",
"splash/style.css": "78eb41694f0471d01d193d193496f4c8",
"index.html": "99af0cf81dd4768d0c446625d5bd6a00",
"/": "99af0cf81dd4768d0c446625d5bd6a00",
"adview.html": "f45f548e065f81a742e03074eecc1436",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5"
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
