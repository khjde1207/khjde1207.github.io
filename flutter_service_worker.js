'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/icon-512.png": "e7deaa9529c77f37c531f63f1a466e50",
"icons/icon-192.png": "018d0887ee5b02426199d40cafb94c36",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/favicon.ico": "29a6ee4612f53daba252c8db073d6403",
"icons/icon-192-maskable.png": "3a33ad3f6be5b85e349e98afa84e0fb8",
"icons/apple-touch-icon.png": "185f3df68928ce6e077929a580a09d73",
"icons/icon-512-maskable.png": "2f3810907409a88d049222a5e4904ded",
"main.dart.js": "68c214592ca2cba4273a547205f6e9dc",
"favicon.png": "2f3810907409a88d049222a5e4904ded",
"index.html": "cfdfea773b0b4c611d4958235a0199f8",
"/": "cfdfea773b0b4c611d4958235a0199f8",
"splash/style.css": "78eb41694f0471d01d193d193496f4c8",
"splash/img/light-4x.png": "e726e6ac2fb3ca26e8b7bef12ae09248",
"splash/img/dark-4x.png": "e726e6ac2fb3ca26e8b7bef12ae09248",
"splash/img/light-3x.png": "4a1bd3f70f94ed6d4f1c11f116fe6927",
"splash/img/dark-1x.png": "da3192864900969498da7adb007bec4a",
"splash/img/dark-2x.png": "adeb0650a7bf6efe68458f3dc9c07046",
"splash/img/light-1x.png": "da3192864900969498da7adb007bec4a",
"splash/img/light-2x.png": "adeb0650a7bf6efe68458f3dc9c07046",
"splash/img/dark-3x.png": "4a1bd3f70f94ed6d4f1c11f116fe6927",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin": "14e1eb69e1312d451485895ac31a6bba",
"assets/NOTICES": "2a271ed7b9a30e46a58d03b487db9ab8",
"assets/AssetManifest.json": "82dd594734657991987c618c1732d01f",
"assets/assets/brand_snstop.png": "19a831f6798979fbcac2017f32ef8fb2",
"assets/assets/lottie/file-loading.json": "bbec956017f0f7226a0ad0769442af7c",
"assets/assets/lottie/background.json": "1b25492a612cecd34bcfa8639a319ad4",
"assets/assets/lottie/animation_lmdketcx.json": "189fc0d478041f2dfe536e9bc5e55d59",
"assets/assets/lottie/theme.json": "a01abdbb867579166526f2b456f4c829",
"assets/assets/lottie/linkd.json": "ba239ad6071c5b66de84109b15fea81f",
"assets/assets/lottie/tts.json": "696da92410961af3baf88b32f6888390",
"assets/assets/lottie/adLoading.json": "65cb43a16cf2762d7bf3e051bfd62f4a",
"assets/assets/lottie/text.json": "42c1e12edfe982cea1a1164da3bb91fe",
"assets/assets/edge_icon.png": "b137a56222b63bb57ca9fb2eafea84dd",
"assets/assets/epub.jpg": "ba1b05d1785ed7587e87a31389c934f1",
"assets/assets/chrome-icon.png": "892804af734438f55e9e9a3a82372d6f",
"assets/assets/tessdata_config.json": "a9b5e429644bc5903610c71a192cf4ec",
"assets/assets/firefox-icon.png": "df6ec9e9fe1cd9552be010ba94fffed0",
"assets/assets/opera-icon.png": "90af9736504bce2c6d211a764ea153d9",
"assets/assets/Safari-icon.png": "e7c97e6947e98f3b781ef122a857afc6",
"assets/assets/zip.jpg": "2844892af5bf1a65b45ae4ed7ffde25b",
"assets/assets/splash.png": "23b9553503d191ba77897300c6a5f66b",
"assets/fonts/MaterialIcons-Regular.otf": "4798cff9e0b1fa3bf46fd4101c7d8ba8",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "ec6cc114195fbeef7767f059790356fd",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"manifest.json": "9b4fc0cd14afa4665ed649bd618c5ce7",
"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"version.json": "c3eeeb1399cbbf5c62172dd5aed6192e",
"adview.html": "f45f548e065f81a742e03074eecc1436"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
