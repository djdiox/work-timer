"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/work-timer/index.html","5d26ccbe9607d6ef19de51e237d5fddd"],["/work-timer/static/css/main.b5ede766.css","57b0adf40a037db09697850b32e1a826"],["/work-timer/static/js/main.b182c8e6.js","0e43797d2d935da60ae860fec13bef27"],["/work-timer/static/media/MaterialIcons-Regular.e79bfd88.eot","e79bfd88537def476913f3ed52f4f4b3"],["/work-timer/static/media/logo.ee7cd8ed.svg","ee7cd8ed2dcec943251eb2763684fc6f"],["/work-timer/static/media/roboto-latin-100.01dbb814.woff2","01dbb814469dc501bd70cf9f13e0b880"],["/work-timer/static/media/roboto-latin-100.02fbb4cf.woff","02fbb4cff7f148a54db366fa4adf086f"],["/work-timer/static/media/roboto-latin-100italic.5bfe254d.woff2","5bfe254da04d4f1a2ed78e818a55a214"],["/work-timer/static/media/roboto-latin-100italic.87528ba9.woff","87528ba9a6e829db88fd8d2b94b362b9"],["/work-timer/static/media/roboto-latin-300.68b24b48.woff2","68b24b48f11ff8e947976b529c6f5941"],["/work-timer/static/media/roboto-latin-300.dc2e2189.woff","dc2e21898247b807422ac32ba45f58c6"],["/work-timer/static/media/roboto-latin-300italic.31b2bbfb.woff2","31b2bbfb6f231552f1d5c5879664ae03"],["/work-timer/static/media/roboto-latin-300italic.4bcc85a5.woff","4bcc85a50fd0d42d5e416c56b39b8d71"],["/work-timer/static/media/roboto-latin-400.a2647ffe.woff2","a2647ffe169bbbd94a3238020354c732"],["/work-timer/static/media/roboto-latin-400.a9fc51fd.woff","a9fc51fd0214c75ee5953dda0f2a06a6"],["/work-timer/static/media/roboto-latin-400italic.347bfb18.woff2","347bfb18c4e5fd1642089bd15bf3e628"],["/work-timer/static/media/roboto-latin-400italic.bad78f93.woff","bad78f935b0182bd83ac29a45edcdb25"],["/work-timer/static/media/roboto-latin-500.4b218fc7.woff2","4b218fc7ca179e548471ff37e3060081"],["/work-timer/static/media/roboto-latin-500.ac8381d5.woff","ac8381d5023c0187e7a094726d204f6e"],["/work-timer/static/media/roboto-latin-500italic.01ef9f5b.woff","01ef9f5b9fc166ecdf86e02e34b8fd64"],["/work-timer/static/media/roboto-latin-500italic.cfd2fe08.woff2","cfd2fe08211aadeccac1de3fb5d45ad5"],["/work-timer/static/media/roboto-latin-700.89b46943.woff","89b469433216121ca9d12c1aef1353d1"],["/work-timer/static/media/roboto-latin-700.aa3e8711.woff2","aa3e87117db2b3c27801cbb8dfe40c6c"],["/work-timer/static/media/roboto-latin-700italic.42b4247c.woff","42b4247cf22991d1c26d8f66eb8f38f8"],["/work-timer/static/media/roboto-latin-700italic.5b2c1ede.woff2","5b2c1edeeb1ce5f7581a22a8cad42410"],["/work-timer/static/media/roboto-latin-900.fa058128.woff2","fa058128ab6fcaa61257208d085b4d57"],["/work-timer/static/media/roboto-latin-900.fceb24a6.woff","fceb24a67b9ab2b0074defd70c0c54d9"],["/work-timer/static/media/roboto-latin-900italic.450b4cf2.woff2","450b4cf2cbd89c75135c0d9db9ade5a2"],["/work-timer/static/media/roboto-latin-900italic.968fd8b5.woff","968fd8b51b2075525dc4780b2c7affb0"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var i=new URL(e);return r&&i.pathname.match(r)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),i=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/work-timer/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});