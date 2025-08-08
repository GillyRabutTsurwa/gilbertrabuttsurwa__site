<script setup>
const props = defineProps({ blok: Object })
</script>
<template>
    <div>
        <img v-for="currentImg in blok.img" :src="currentImg.fileName">
    </div>
</template>
   
<style lang="scss" scoped>
div {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

img {
    width: 40rem;
    height: 60rem;
}
</style>