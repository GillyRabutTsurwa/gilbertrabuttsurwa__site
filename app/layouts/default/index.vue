<script setup>
import { useBreakpoints } from "@/composables/useBreakpoints";

const { pixels, toggleElementOnResize } = useBreakpoints();
const show = ref(null);


onMounted(() => {
    if (process.client) {
        toggleElementOnResize(767);
        const body = document.querySelector("body");
        show.value = pixels.value < body.clientWidth ? true : false;
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