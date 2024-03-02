'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"adview.html": "f45f548e065f81a742e03074eecc1436",
"version.json": "460686e12193cc2435df9faba3cc089b",
"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"manifest.json": "9b4fc0cd14afa4665ed649bd618c5ce7",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/img/branding-2x.png": "4d265e57b799169780caa12279249ffe",
"splash/img/branding-1x.png": "93fdbb6cb7593810b4fb7b497de91b8c",
"splash/img/branding-3x.png": "ae476bc39c8efc5c7af6176700589166",
"splash/img/light-4x.png": "0f38d2ea6b5e2c69e91c448bc045ccdd",
"splash/img/dark-2x.png": "f5838c9a29f85b95f61a45cb143ed4d8",
"splash/img/branding-4x.png": "5be09eeca63e7a1760dcb5da01abbfe2",
"splash/img/dark-1x.png": "4682199439f0dc9bb7851d21f46cc752",
"splash/img/branding-dark-4x.png": "5be09eeca63e7a1760dcb5da01abbfe2",
"splash/img/branding-dark-1x.png": "93fdbb6cb7593810b4fb7b497de91b8c",
"splash/img/branding-dark-2x.png": "4d265e57b799169780caa12279249ffe",
"splash/img/light-3x.png": "ee986dbd4e1ccabf4c2c66716f36b3ce",
"splash/img/dark-3x.png": "ee986dbd4e1ccabf4c2c66716f36b3ce",
"splash/img/light-2x.png": "f5838c9a29f85b95f61a45cb143ed4d8",
"splash/img/branding-dark-3x.png": "ae476bc39c8efc5c7af6176700589166",
"splash/img/dark-4x.png": "0f38d2ea6b5e2c69e91c448bc045ccdd",
"splash/img/light-1x.png": "4682199439f0dc9bb7851d21f46cc752",
"splash/style.css": "78eb41694f0471d01d193d193496f4c8",
"index.html": "35ef79a481d4b8a72b35eeaaf874410d",
"/": "35ef79a481d4b8a72b35eeaaf874410d",
"main.dart.js": "ce752209e220309cfc6a932627e2eaaf",
"icons/favicon.ico": "29a6ee4612f53daba252c8db073d6403",
"icons/icon-192.png": "018d0887ee5b02426199d40cafb94c36",
"icons/icon-512.png": "e7deaa9529c77f37c531f63f1a466e50",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/apple-touch-icon.png": "185f3df68928ce6e077929a580a09d73",
"icons/icon-512-maskable.png": "2f3810907409a88d049222a5e4904ded",
"icons/icon-192-maskable.png": "3a33ad3f6be5b85e349e98afa84e0fb8",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"favicon.png": "2f3810907409a88d049222a5e4904ded",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"assets/NOTICES": "424d261e3b833428044780efae3ddc8b",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "defbfd8b45a343d88a46202691a6da81",
"assets/AssetManifest.bin.json": "fbc1cc785559fcb63e2e2aa38050a4b2",
"assets/AssetManifest.bin": "40b4566377c08a6b220be067003f8804",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "6db0bc5737149370deeb854eea05a44a",
"assets/assets/img_load_error.jpg": "fe9f5f147d58be7a10a0ae939ee20dd0",
"assets/assets/edge_icon.png": "b137a56222b63bb57ca9fb2eafea84dd",
"assets/assets/Safari-icon.png": "e7c97e6947e98f3b781ef122a857afc6",
"assets/assets/opera-icon.png": "90af9736504bce2c6d211a764ea153d9",
"assets/assets/epub.jpg": "ba1b05d1785ed7587e87a31389c934f1",
"assets/assets/tessdata_config.json": "a9b5e429644bc5903610c71a192cf4ec",
"assets/assets/zip.jpg": "2844892af5bf1a65b45ae4ed7ffde25b",
"assets/assets/lottie/adLoading.json": "65cb43a16cf2762d7bf3e051bfd62f4a",
"assets/assets/lottie/linkd.json": "ba239ad6071c5b66de84109b15fea81f",
"assets/assets/lottie/book_page.json": "17c5bdf00ddf076b39bc5ab530199e34",
"assets/assets/lottie/file-loading.json": "bbec956017f0f7226a0ad0769442af7c",
"assets/assets/lottie/text.json": "42c1e12edfe982cea1a1164da3bb91fe",
"assets/assets/lottie/tts.json": "696da92410961af3baf88b32f6888390",
"assets/assets/lottie/background.json": "1b25492a612cecd34bcfa8639a319ad4",
"assets/assets/lottie/animation_lmdketcx.json": "189fc0d478041f2dfe536e9bc5e55d59",
"assets/assets/lottie/theme.json": "a01abdbb867579166526f2b456f4c829",
"assets/assets/chrome-icon.png": "892804af734438f55e9e9a3a82372d6f",
"assets/assets/branding.png": "92864433af07c148ccc135bad34c0047",
"assets/assets/splash.png": "14a11351d9ab137173a4e3dbf3e93885",
"assets/assets/brand_snstop.png": "19a831f6798979fbcac2017f32ef8fb2",
"assets/assets/firefox-icon.png": "df6ec9e9fe1cd9552be010ba94fffed0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
