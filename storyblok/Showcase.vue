<script setup>
const FrontEnd = resolveComponent("FrontEnd");
const BackEnd = resolveComponent("BackEnd");
// NOTE: using shallow ref as recommended by Vue to avoid performance issues upon using ref with a dynamic component value
const currentComponent = shallowRef(FrontEnd);
const showFrontend = () => {
    currentComponent.value = FrontEnd;
    console.log("frontend");
};
const showBackend = () => {
    currentComponent.value = BackEnd;
    console.log("backend");
};

const props = defineProps({ blok: Object }); //NOTE: j'utilise pas pour le moment
console.log(props.blok);
console.log(props.blok.component);
</script>

<template>
    <section class="skills landing">
        <h2 class="skills__main-title">Select Projects</h2>
        <div class="skills__buttons">
            <button @click="showFrontend" class="header__button skills__buttons--button">Front-End</button>
            <button @click="showBackend" class="header__button skills__buttons--button">Back-End</button>
        </div>
        <component :is="currentComponent"></component>
    </section>
</template>

<style lang="scss" scoped>
.skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // grid-template-rows: repeat(2, min-content) repeat(2, 55vh);
    // grid-template-rows: repeat(2, min-content) 80vh;
    grid-template-rows: repeat(2, min-content) 1fr;
    // height: 100vh;
    // min-height: 100vh;
    margin: 0 3rem;
    background-color: $default-grey;
    gap: 4rem;
    padding-top: 6rem;
    color: rgb(238, 238, 238);

    @include breakpoint(1023) {
        order: 3; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
        min-height: unset;
        height: auto;
    }

    &__main-title {
        grid-column: 1 / -1;
        justify-self: center;
        font-size: 3rem;
        color: #1a2934;
    }

    &__buttons {
        grid-column: 1 / -1;
        grid-row: 2 / 3;
        justify-self: center;
        display: flex;
        align-items: flex-start;

        &--button {
            margin-top: 0;
            margin-right: 2.5rem;
        }
    }
}

//@todo - refactor and move this
.header__button {
    display: inline-block;
    border: 2px solid #000;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    padding: 1.5rem 3rem;
    margin-top: 3rem;
    background-color: $steelblue;
    cursor: pointer;
    z-index: 10000;

    &:hover {
        background-color: #fff;
        color: $steelblue;
    }
}
</style>
