<script setup>
import { useBreakpoints } from '~~/composables/useBreakpoints';

const route = useRoute();
const projectsPage = route.name === "projects" || route.name === "shop";
console.log(route.name);

const { pixels, toggleElementOnResize } = useBreakpoints();
const show = ref(null);


onMounted(() => {
    if (process.client) {
        toggleElementOnResize(767);
        console.log(pixels.value);
        const body = document.querySelector("body");
        console.log(body.clientWidth)
        show.value = pixels.value < body.clientWidth ? true : false;
        console.log(show.value);
    }
});
</script>
<template>
    <div class="corps">
        <slot />
    </div>
</template>

<style lang="scss">
.corps {
    font-family: "Kulim Park", Arial, Helvetica, sans-serif !important;
}
</style>