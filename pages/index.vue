<script setup lang="ts">
const Loader = resolveComponent("Loader");
const MainContent = resolveComponent("MainContent");
const currentComponent = shallowRef(Loader);
onMounted(() => {
    setTimeout(() => {
        currentComponent.value = MainContent;
    }, 5000);
})
</script>

<template>
    <section id="app">
        <component :is="currentComponent"></component>
    </section>
</template>


<style lang="scss">
#app {
    display: grid;
    grid-template-areas: "Header" "First" "Second" "Third" "Fourth" "Fifth" "Footer";
    grid-template-columns: 1fr;
    font-family: "Kulim Park", Arial, Helvetica, sans-serif !important;
    height: 100%;

    &>*.landing {
        height: inherit;
    }
}

.container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
}

.appear-enter-active {
    animation: appear 1s;
}

.subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
}

.links {
    padding-top: 15px;
}

@keyframes appear {
    0% {
        opacity: 0;
    }
}
</style>
