<template>
  <div class="maincontent">
    <Navigation />
    <Tete />
    <Premiere />
    <Deuxieme />
    <Troisieme />
    <Quartrieme />
    <Cinquieme />
    <Pied />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Header from "./Header";
import Premiere from "./Premiere";
import Deuxieme from "./Deuxieme";
import Troisieme from "./Troisieme";
import Quartrieme from "./Quartrieme";
import Cinquieme from "./Cinquieme";
import Footer from "./Footer";

export default {
  components: {
    Navigation: Navigation,
    Tete: Header,
    Premiere: Premiere,
    Deuxieme: Deuxieme,
    Troisieme: Troisieme,
    Quartrieme: Quartrieme,
    Cinquieme: Cinquieme,
    Pied: Footer,
  },
};
</script>

<style>
</style>