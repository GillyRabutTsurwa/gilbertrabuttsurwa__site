<script>
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  //   import L from "leaflet";
  import "leaflet/dist/leaflet.css";
  import imgURL from "$lib/images/marker-icon.png";
  let map;

  //   console.log(L);
  const createMap = (mapObject) => {
    // TESTING solution for icon not showing in prod
    //NOTE: if it works, i got solution here: https://stackoverflow.com/questions/60174040/marker-icon-isnt-showing-in-leaflet
    const myIcon = mapObject.icon({
      iconUrl: imgURL,
    });

    //
    let locationIndex = 0;

    const markerLocations = [
      ["Brighton Beach", 46.84348202808752, -91.99249886931425],
      ["Many good memories playing football for school and club here", 45.15835028793204, -93.22600214824874],
      ["Shenandoah National Park, Front Royal VA", 38.90399373508472, -78.18948339912654],
      ["LOCATON_3", 37.805099431289705, -122.42706695403974],
      ["LOCATION_4", -0.09042235748606041, 34.76855266138137],
      ["LOCATION_5", -1.2903828006841636, 36.88106610598773],
    ];
    const mapStartingPoint = [markerLocations[0][1], markerLocations[0][2]];

    const nextLocation = () => {
      locationIndex += 1;
      if (locationIndex > markerLocations.length) locationIndex = 0;
    };

    const zoomLevel = 7;

    // NOTE: it seems this is the entry point of rendering the map
    map = mapObject.map("mapContainer").setView(mapStartingPoint, zoomLevel); // ("map") signifie un element dans notre HTML ayant le ID de "map"
    // NEW: testing, disable zoom/scroll on render (by default)
    map.scrollWheelZoom.disable();

    //NEW: testing: toggle zoom functionality on map when it's clicked upon
    map.on("click", function () {
      if (map.scrollWheelZoom.enabled()) {
        map.scrollWheelZoom.disable();
      } else {
        map.scrollWheelZoom.enable();
      }
    });

    setInterval(() => {
      nextLocation();
      map.flyTo([markerLocations[locationIndex][1], markerLocations[locationIndex][2]], 13);
    }, 30000);

    // map.on("click", (event) => map.flyTo([40.622, -73.916], 13));
    /**
     * NOTE:
     * tile layers affecct the appearance of the map
     * apparently there's all sorts and are customisable by simply changing the url (1st parametre of the tileLayer())
     */
    mapObject
      .tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      })
      .addTo(map);

    // NEW: rendering multiple markers on multiple coordinates
    // https://stackoverflow.com/questions/42968243/how-to-add-multiple-markers-in-leaflet-js
    // simply put the code that generates the marker in a for loop and adjust the values

    for (let i = 0; i < markerLocations.length; i++) {
      mapObject.marker([markerLocations[i][1], markerLocations[i][2]], { icon: myIcon }).addTo(map).bindPopup(markerLocations[i][0]).openPopup();
    }
  };

  onMount(() => {
    /**
     * NOTE: if i solved the window not defined, ce sera grace a ces deux liens:
     * https://stackoverflow.com/questions/36367532/how-can-i-conditionally-import-an-es6-module
     * https://2ality.com/2017/01/import-operator.html
     * and this one too
     * https://stackoverflow.com/questions/74220206/sveltekit-readable-store-initialize-on-client-side-only
     */
    // if we are in the browser environment
    if (browser) {
      // import the leaflet library
      import("leaflet").then((L) => {
        console.log(L);
        // then use the library object in the function that is responsible for rendering the map. this should work
        createMap(L);
      });
    }
  });
</script>

<div id="mapContainer" />

<style lang="scss">
  #mapContainer {
    width: 100%;
    height: 75vh;
  }

  .leaflet-popup-content-wrapper,
  .leaflet-popup-content {
    background-color: #ddd;
  }

  .leaflet-popup-tip-container {
    display: none; //NOTE; don't like how it looks on here et j'en ai pas besoin dans ce cas-ci
  }
  .orange {
    background-color: #ddd;
    font-size: 1rem;
  }
</style>
