'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"main.dart.js": "4f4ab32f531c41918fe971eb9bf4aa23",
"version.json": "2771ad42e4eada9d00e3c7a7d3a0a632",
"assets/assets/images/bg1.png": "c65cb9f1ca4092fd625a6794486b7733",
"assets/assets/images/bg2.png": "54080cf92090ec0b3a40e30b12dbe53c",
"assets/assets/images/bg3.png": "38c70566c68073c0d75d99c4d2f05c2d",
"assets/assets/images/bg4.png": "21018df233c8d3446dcef6fe0911b68a",
"assets/assets/images/bg5.png": "4f6edaa661a15f00e1b7337d6e7b856b",
"assets/assets/images/bg6.png": "542420c7c2b9bff8d8ad574d0590fa51",
"assets/assets/images/bg7.png": "e394103c872470c26307d68db175f9c9",
"assets/assets/images/bg8.png": "1d2259fbbdbf9aee9c36159ee3f33696",
"assets/assets/images/bg9.png": "200d5540c02fd1ceb778cd1113ef7345",
"assets/assets/sample/sherlock_Holmes_image.zip": "91b5bdc5865f72819288f7145e281552",
"assets/assets/sample/Sherlock%2520Holmes.txt": "1b3170a3edd88225d5394820d0259b79",
"assets/assets/sample/%25ED%2598%2584%25EC%25A7%2584%25EA%25B1%25B4-%25EC%259A%25B4%25EC%2588%2598_%25EC%25A2%258B%25EC%259D%2580_%25EB%2582%25A0-%25EA%25B0%259C%25EB%25B2%25BD-%25EA%25B3%25B5%25EC%259C%25A0%25EB%25AF%25B8%25EB%258B%25B9.txt": "a752325b2b263b71332379941c2a2a91",
"assets/assets/sample/%25ED%2598%2584%25EC%25A7%2584%25EA%25B1%25B4-%25EC%259A%25B4%25EC%2588%2598%2520%25EC%25A2%258B%25EC%259D%2580%2520%25EB%2582%25A0-%25EA%25B0%259C%25EB%25B2%25BD-%25EA%25B3%25B5%25EC%259C%25A0%25EB%25AF%25B8%25EB%258B%25B9.zip": "3e927b17f83f1b8f490d92f2858030cc",
"assets/assets/fonts/NanumGothic.otf": "b31f626df4e236f0f6b620fdb9e55f63",
"assets/assets/fonts/OpenSans-Medium.ttf": "0cbcac22e73cab1d6dbf2cfcc269b942",
"assets/assets/fonts/ReadexPro-Medium.ttf": "405d71f0833bcd670e4714378bd59bfa",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/NanumMyeongjo.otf": "83a00938e5f65c67277b5e8df02122a9",
"assets/assets/fonts/BMDOHYEON_ttf.ttf": "9dbe9ac8eacbaa0f864d2087ea589c42",
"assets/assets/fonts/BMEULJIROTTF.ttf": "2e60d3cf05303717fc61a72a6da5f6cf",
"assets/assets/fonts/KoPubBatangLight.ttf": "9ada10e741a235dc69bc85cd3ef7b8e8",
"assets/assets/fonts/KoPubDotumLight.ttf": "e63053ba2b7632f5dc7abc4d585066c1",
"assets/assets/fonts/MaruBuri-Regular.otf": "28b49705006b20ca955f9f09c55a0b55",
"assets/assets/fonts/NanumPen.otf": "a6fcfd1b95f1815e2e6b70294e299dec",
"assets/assets/fonts/RIDIBatang.otf": "d6425aff7a6c668739ea0383aed74b38",
"assets/assets/tessdata_config.json": "a9b5e429644bc5903610c71a192cf4ec",
"assets/assets/splash.png": "de94645edddd906a3eda12bc97b4b28b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "4297e4bfd4e0c77bb836c2442e8e3142",
"assets/FontManifest.json": "1ccf2e6d5a7c6d2604dd73d84cbceb9a",
"assets/NOTICES": "e7a25dd820eda611066b199c50a83eb3",
"favicon.png": "13b3b77a47014f48509eff4c2a762881",
"icons/Icon-192.png": "2ea54643c642acbdd3c2f4a0c8abbc3c",
"icons/Icon-512.png": "60a535c4209f081bcb226f89c029264f",
"icons/Icon-maskable-512.png": "60a535c4209f081bcb226f89c029264f",
"icons/Icon-maskable-192.png.png": "2ea54643c642acbdd3c2f4a0c8abbc3c",
"index.html": "ef834f4795262b4817b45ca6487af199",
"/": "ef834f4795262b4817b45ca6487af199",
"manifest.json": "d694bac735e52b479f65c3796a94a979",
"adview.html": "47d1bdb135ffe625bf0ee4448f0b63ce"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
