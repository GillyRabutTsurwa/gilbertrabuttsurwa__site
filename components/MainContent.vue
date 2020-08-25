<template>
  <div class="maincontent">
    <Tete />
    <Premiere />
    <Deuxieme />
  </div>
</template>

<script>
import Header from "./Header";
import Premiere from "./Premiere";
import Deuxieme from "./Deuxieme";
export default {
    components: {
        Tete: Header,
        Premiere: Premiere,
        Deuxieme: Deuxieme,
    }
}
</script>

<style>
</style>