'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"sql-wasm.wasm": "51739179fd57f102da5297192df613e7",
"main.dart.js": "645eef3ea4654c72ad68843b6a61f7f3",
"flutter_bootstrap.js": "3f26ebb6e713fe7db57d3bde6c281d42",
"sql-wasm.js": "ae7f97c3e8695a30c1ecb294affa311b",
"splash/img/branding-dark-1x.png": "0ecce35176c6d3fc908f5a3e21463ad7",
"splash/img/light-2x.png": "e2ea6e238d2f02406c6043f526975ad0",
"splash/img/branding-1x.png": "0ecce35176c6d3fc908f5a3e21463ad7",
"splash/img/branding-2x.png": "552bf6bf409cf1822f70efdd36013d17",
"splash/img/branding-4x.png": "9826e179191d6efa62b61302e6036539",
"splash/img/light-1x.png": "54e36e18b2d150a197c9950c42f13114",
"splash/img/branding-3x.png": "80ec1ffac1144697e2b53ffce4a03077",
"splash/img/branding-dark-4x.png": "9826e179191d6efa62b61302e6036539",
"splash/img/light-4x.png": "debb19503006c95407a1759031e1f930",
"splash/img/dark-3x.png": "d04e6a86ad01f682091ebfec7243a1bc",
"splash/img/dark-2x.png": "e2ea6e238d2f02406c6043f526975ad0",
"splash/img/dark-4x.png": "debb19503006c95407a1759031e1f930",
"splash/img/branding-dark-2x.png": "552bf6bf409cf1822f70efdd36013d17",
"splash/img/branding-dark-3x.png": "80ec1ffac1144697e2b53ffce4a03077",
"splash/img/dark-1x.png": "54e36e18b2d150a197c9950c42f13114",
"splash/img/light-3x.png": "d04e6a86ad01f682091ebfec7243a1bc",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "78eb41694f0471d01d193d193496f4c8",
"icons/icon-512.png": "e7deaa9529c77f37c531f63f1a466e50",
"icons/Icon-192.png": "018d0887ee5b02426199d40cafb94c36",
"icons/apple-touch-icon.png": "185f3df68928ce6e077929a580a09d73",
"icons/Icon-maskable-192.png": "3a33ad3f6be5b85e349e98afa84e0fb8",
"icons/Icon-maskable-512.png": "2f3810907409a88d049222a5e4904ded",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/icon-192.png": "018d0887ee5b02426199d40cafb94c36",
"icons/favicon.ico": "29a6ee4612f53daba252c8db073d6403",
"icons/Icon-512.png": "e7deaa9529c77f37c531f63f1a466e50",
"icons/icon-192-maskable.png": "3a33ad3f6be5b85e349e98afa84e0fb8",
"icons/icon-512-maskable.png": "2f3810907409a88d049222a5e4904ded",
"assets/assets/tessdata_config.json": "a9b5e429644bc5903610c71a192cf4ec",
"assets/assets/branding.png": "9110555c75eeac13d820069a182bde85",
"assets/assets/opera-icon.png": "90af9736504bce2c6d211a764ea153d9",
"assets/assets/epub.jpg": "ba1b05d1785ed7587e87a31389c934f1",
"assets/assets/firefox-icon.png": "df6ec9e9fe1cd9552be010ba94fffed0",
"assets/assets/lottie/linkd.json": "ba239ad6071c5b66de84109b15fea81f",
"assets/assets/lottie/book_page.json": "17c5bdf00ddf076b39bc5ab530199e34",
"assets/assets/lottie/adLoading.json": "65cb43a16cf2762d7bf3e051bfd62f4a",
"assets/assets/lottie/file-loading.json": "bbec956017f0f7226a0ad0769442af7c",
"assets/assets/lottie/background.json": "1b25492a612cecd34bcfa8639a319ad4",
"assets/assets/lottie/tts.json": "696da92410961af3baf88b32f6888390",
"assets/assets/lottie/animation_lmdketcx.json": "189fc0d478041f2dfe536e9bc5e55d59",
"assets/assets/lottie/text.json": "42c1e12edfe982cea1a1164da3bb91fe",
"assets/assets/lottie/theme.json": "a01abdbb867579166526f2b456f4c829",
"assets/assets/laser.wav": "69aa6adabb5d9460474d3e46a21f6ddf",
"assets/assets/edge_icon.png": "b137a56222b63bb57ca9fb2eafea84dd",
"assets/assets/img_load_error.jpg": "fe9f5f147d58be7a10a0ae939ee20dd0",
"assets/assets/google_attribution.png": "4f1e04a043326729349987b80ca8fa15",
"assets/assets/chrome-icon.png": "892804af734438f55e9e9a3a82372d6f",
"assets/assets/splash.png": "14a11351d9ab137173a4e3dbf3e93885",
"assets/assets/Safari-icon.png": "e7c97e6947e98f3b781ef122a857afc6",
"assets/assets/zip.jpg": "2844892af5bf1a65b45ae4ed7ffde25b",
"assets/assets/brand_snstop.png": "19a831f6798979fbcac2017f32ef8fb2",
"assets/assets/silent.mp3": "67b90e8a4fee684d170c815864f5658a",
"assets/fonts/MaterialIcons-Regular.otf": "8bb25b38a233137d28fd44da1d6821eb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/FontManifest.json": "53fca3b0a4ed404a1651683693a74fb1",
"assets/AssetManifest.json": "033f3d86775ee6be7ff0b2c0a32e5481",
"assets/AssetManifest.bin.json": "e80ea8e82767db44c355a25976b48097",
"assets/NOTICES": "90d00ff718bcfffbff2c8c16d29a8018",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/quill_native_bridge_linux/assets/xclip": "d37b0dbbc8341839cde83d351f96279e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/flutter_charset_detector_web/assets/web/jschardet.min.js": "10bc5edf1407006ddb06b197c5a5002e",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/packages/aad_oauth/assets/msalv2.js": "7fb1a65e14acf2e247a813225eed3ac8",
"assets/AssetManifest.bin": "625f6659ddb47abf75243ba206f16400",
"index.html": "6a414d37850cdaf63cae6fa591d549f3",
"/": "6a414d37850cdaf63cae6fa591d549f3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"version.json": "3a26040af250764dbde8ca2b2e05b908",
"manifest.json": "9b4fc0cd14afa4665ed649bd618c5ce7",
"favicon.png": "2f3810907409a88d049222a5e4904ded",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
