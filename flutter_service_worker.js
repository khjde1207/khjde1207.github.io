'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"version.json": "ba91c1cd3dd2d8bb1ca9f283b9df9b3f",
"assets/assets/images/bg2.png": "54080cf92090ec0b3a40e30b12dbe53c",
"assets/assets/images/bg4.png": "21018df233c8d3446dcef6fe0911b68a",
"assets/assets/images/bg5.png": "4f6edaa661a15f00e1b7337d6e7b856b",
"assets/assets/images/bg6.png": "542420c7c2b9bff8d8ad574d0590fa51",
"assets/assets/images/bg7.png": "e394103c872470c26307d68db175f9c9",
"assets/assets/images/bg8.png": "1d2259fbbdbf9aee9c36159ee3f33696",
"assets/assets/images/bg9.png": "200d5540c02fd1ceb778cd1113ef7345",
"assets/assets/images/bg3.png": "21f6338354835c4cc2fe8a61ca0908d0",
"assets/assets/images/bg1.png": "f60233becbcb9e91f68331bca196c3bc",
"assets/assets/sample/sherlock_Holmes_image.zip": "91b5bdc5865f72819288f7145e281552",
"assets/assets/sample/%25ED%2598%2584%25EC%25A7%2584%25EA%25B1%25B4-%25EC%259A%25B4%25EC%2588%2598%2520%25EC%25A2%258B%25EC%259D%2580%2520%25EB%2582%25A0-%25EA%25B0%259C%25EB%25B2%25BD-%25EA%25B3%25B5%25EC%259C%25A0%25EB%25A7%2588%25EB%258B%25B9.zip": "3e927b17f83f1b8f490d92f2858030cc",
"assets/assets/sample/%25ED%2598%2584%25EC%25A7%2584%25EA%25B1%25B4-%25EC%259A%25B4%25EC%2588%2598_%25EC%25A2%258B%25EC%259D%2580_%25EB%2582%25A0-%25EA%25B0%259C%25EB%25B2%25BD-%25EA%25B3%25B5%25EC%259C%25A0%25EB%25A7%2588%25EB%258B%25B9.txt": "c1ec741f9ebd6afb31c5c9f2ed5db329",
"assets/assets/sample/Sherlock%2520Holmes.txt": "1b3170a3edd88225d5394820d0259b79",
"assets/assets/fonts/NanumGothic.otf": "b31f626df4e236f0f6b620fdb9e55f63",
"assets/assets/fonts/OpenSans-Medium.ttf": "0cbcac22e73cab1d6dbf2cfcc269b942",
"assets/assets/fonts/ReadexPro-Medium.ttf": "405d71f0833bcd670e4714378bd59bfa",
"assets/assets/fonts/Roboto-Medium.ttf": "b2d307df606f23cb14e6483039e2b7fa",
"assets/assets/fonts/BMDOHYEON_ttf.ttf": "9dbe9ac8eacbaa0f864d2087ea589c42",
"assets/assets/fonts/BMEULJIROTTF.ttf": "2e60d3cf05303717fc61a72a6da5f6cf",
"assets/assets/fonts/KoPubBatangLight.ttf": "9ada10e741a235dc69bc85cd3ef7b8e8",
"assets/assets/fonts/KoPubDotumLight.ttf": "e63053ba2b7632f5dc7abc4d585066c1",
"assets/assets/fonts/NanumMyeongjo.otf": "83a00938e5f65c67277b5e8df02122a9",
"assets/assets/fonts/MaruBuri-Regular.otf": "28b49705006b20ca955f9f09c55a0b55",
"assets/assets/fonts/NanumPen.otf": "a6fcfd1b95f1815e2e6b70294e299dec",
"assets/assets/fonts/RIDIBatang.otf": "d6425aff7a6c668739ea0383aed74b38",
"assets/assets/fonts/GyeonggiBatang.woff": "7f497c60bf2d10f921c3c7123a61ce9e",
"assets/assets/fonts/%25EC%2584%259C%25EC%259A%25B8%25ED%2595%259C%25EA%25B0%2595%2520%25EC%259E%25A5%25EC%25B2%25B4M.ttf": "4bf80d661aa4a093a2199b7270ab8e58",
"assets/assets/tessdata_config.json": "a9b5e429644bc5903610c71a192cf4ec",
"assets/assets/splash.png": "de94645edddd906a3eda12bc97b4b28b",
"assets/assets/brand_snstop.png": "19a831f6798979fbcac2017f32ef8fb2",
"assets/assets/chrome-icon.png": "892804af734438f55e9e9a3a82372d6f",
"assets/assets/firefox-icon.png": "df6ec9e9fe1cd9552be010ba94fffed0",
"assets/assets/Safari-icon.png": "e7c97e6947e98f3b781ef122a857afc6",
"assets/assets/opera-icon.png": "90af9736504bce2c6d211a764ea153d9",
"assets/assets/edge_icon.png": "b137a56222b63bb57ca9fb2eafea84dd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "0266ef445553f45f6e45344556cfd6fd",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/ionicons/fonts/Ionicons.ttf": "0cdf2a324d5c21f08c7f446476aa2ee3",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "e77ec57746eb544153bef2f7396730e8",
"assets/FontManifest.json": "b768c3a87a4af36c970d2d0d10faf816",
"assets/NOTICES": "948831a472983636f2ecfb0c0a67fc95",
"icons/Icon-maskable-512.png": "60a535c4209f081bcb226f89c029264f",
"icons/Icon-192.png": "2ea54643c642acbdd3c2f4a0c8abbc3c",
"icons/Icon-maskable-192.png.png": "2ea54643c642acbdd3c2f4a0c8abbc3c",
"icons/Icon-512.png": "60a535c4209f081bcb226f89c029264f",
"main.dart.js": "0bb04eb07311737330fd68f6f1e74136",
"manifest.json": "533cf19397f5460ae263a10380c102e8",
"adview.html": "32a302b207fafdc939ca916ce9c1e75e",
"favicon.png": "13b3b77a47014f48509eff4c2a762881",
"index.html": "c913800c8ff26a4c676ab2fee8e5b748",
"/": "c913800c8ff26a4c676ab2fee8e5b748"
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
