<template>
  <div class="maincontent">
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
import Header from "./Header";
import Premiere from "./Premiere";
import Deuxieme from "./Deuxieme";
import Troisieme from "./Troisieme";
import Quartrieme from "./Quartrieme";
import Cinquieme from "./Cinquieme";
import Footer from "./Footer";

export default {
  components: {
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