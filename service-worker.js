const CACHE_NAME = "droit-app-v1";

const fichiers = [
  "index.html",
  "cours.html",
  "recherche.html",
  "apropos.html",
  "manifest.json"
];


self.addEventListener("install", function(event){

  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(function(cache){
      return cache.addAll(fichiers);
    })
  );

});


self.addEventListener("fetch", function(event){

  event.respondWith(

    caches.match(event.request)
    .then(function(response){

      return response || fetch(event.request);

    })

  );

});
