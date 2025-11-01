<template>
  <div id="mapContainer"></div>
</template>
  
<script setup>
import "leaflet/dist/leaflet.css";

const state = reactive({
  map: null,
});

const createMap = (mapObject) => {
  // const coordinates = [latitude, longitude];
  // NOTE: this value was originally in the setView method, but i'm putting it in a variable for more clarity. change it to play around with it
  const zoomLevel = 10;

  // NOTE: it seems this is the entry point of rendering the map
  state.map = mapObject.map("mapContainer").setView([39.18566, -78.163334], zoomLevel); // ("map") signifie un element dans notre HTML ayant le ID de "map"

  /**
   * NOTE:
   * tile layers affecct the appearance of the map
   * apparently there's all sorts and are customisable by simply changing the url (1st parametre of the tileLayer())
   */
  mapObject.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(state.map);

  // NOTE: and this displays the map marker
  mapObject.marker([39.18566, -78.163334]).addTo(state.map).bindPopup("A pretty CSS3 popup.<br> Easily customizable.").openPopup();
}

onMounted(() => {
  // NOTE: i use very similar code in my portfolio site made by sveltekit, but i'll paste it here anyways
  // https://2ality.com/2017/01/import-operator.html
  // tested: PASS, removed ssr:false in nuxt.config.ts and still works
  // even though this is nuxt 2 docs, this helped me more than the nuxt 3 docs:
  // https://nuxtjs.org/docs/concepts/server-side-rendering/
  if (process.client) {
    import("leaflet").then((library) => {
      createMap(library);
    })
  }
});
</script>
  
<style>
#mapContainer {
  /* NOTEIMPORTANT: largeur et longeur doivent être définées pour afficher la carte */
  /* width: 40vw; */
  width: 100%;
  height: 100%;
}
</style>