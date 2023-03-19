<script setup>
const Loader = resolveComponent("Loader");
const MainContent = resolveComponent("MainContent");
// NOTE: using shallow ref as recommended by Vue to avoid performance issues upon using ref with a dynamic component value
const currentComponent = shallowRef(Loader);
onMounted(() => {
    setTimeout(() => {
        currentComponent.value = MainContent;
    }, 2500);
})
console.log(currentComponent)
</script>

<template>
    <section id="app">
        <component :is="currentComponent"></component>
    </section>
</template>


<style lang="scss">
#app {
    height: 100%;
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
