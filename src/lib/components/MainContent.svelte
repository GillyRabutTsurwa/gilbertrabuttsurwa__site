<script>
  import Navigation from "./Navigation.svelte";
  import Tete from "./layout/Header.svelte";
  import Premier from "./layout/Premier.svelte";
  import Deuxieme from "./layout/Deuxieme.svelte";
  import Troisieme from "./layout/Troisieme.svelte";
  import Quatrieme from "./layout/Quatrieme.svelte";
  import Cinquieme from "./layout/Cinquieme.svelte";
  import Pied from "./layout/Footer.svelte";
</script>

<div class="maincontent">
  <Navigation />
  <Tete />
  <Premier />
  <Deuxieme />
  <Troisieme />
  <Quatrieme />
  <Cinquieme />
  <Pied />
</div>

<style lang="scss">
  /* TESTING */
  .maincontent {
    height: 100%;
  }
  .observable {
    opacity: 0;
    transition: opacity 0.75s ease-in;
  }
  .observer-appear {
    opacity: 1;
  }
</style>
