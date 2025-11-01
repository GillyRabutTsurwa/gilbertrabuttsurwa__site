<script setup lang="ts">
const Loader = resolveComponent("Loader");
const Home = resolveComponent("Home");

const currentComponent = shallowRef(Loader);

onMounted(() => {
    setTimeout(() => {
        currentComponent.value = Home;
    }, 3000);
});
</script>

<template>
    <Transition mode="out-in">
        <component :is="currentComponent"></component>
    </Transition>
</template>


<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
