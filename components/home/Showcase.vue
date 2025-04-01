<script setup lang="ts">
import type { ConcreteComponent } from 'vue';

const FrontEnd = resolveComponent("FrontEnd");
const BackEnd = resolveComponent("BackEnd");
// NOTE: using shallow ref as recommended by Vue to avoid performance issues upon using ref with a dynamic component value
const currentComponent = shallowRef(FrontEnd);
const changeComponent = (composant: string | ConcreteComponent) => currentComponent.value = composant;
</script>

<template>
    <section class="skills landing">
        <h2 class="skills__main-title">Select Projects</h2>
        <FlexContainer layout="row" contentJustify="center" itemsAlign="flex-start" class="skills__buttons">
            <Button @click="changeComponent(FrontEnd)" text="Frontend" colourPrimary="#c69963" colourSecondary="#101d2c" class="skills__buttons--button"/>
            <Button @click="changeComponent(BackEnd)" text="Backend" colourPrimary="#c69963" colourSecondary="#101d2c" class="skills__buttons--button"/>
        </FlexContainer>
        <component :is="currentComponent"></component>
        <Button isLink isExternal path="/projects/" text="All Projects" colourPrimary="#101d2c"
          colourSecondary="#c69963" class="all-projects" />
    </section>
</template>

<style lang="scss" scoped>
.skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, min-content) 1fr;
    background-color: $colour-primary;
    gap: 4rem;
    padding: 6rem 0;
    color: $colour-secondary;

    @include breakpoint(1023) {
        order: 3; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
        min-height: unset;
        height: auto;
    }

    &__main-title {
        grid-column: 1 / -1;
        justify-self: center;
        font-size: 3rem;
        color: $colour-secondary;
    }

    &__buttons {
        grid-column: 1 / -1;
        grid-row: 2 / 3;
        justify-self: center;

        &--button {
            margin-top: 0;
            margin-right: 2.5rem;
        }
    }
}

.all-projects {
    justify-self: end;
    transform: translateX(50%); // pour le centraliser
}
</style>
