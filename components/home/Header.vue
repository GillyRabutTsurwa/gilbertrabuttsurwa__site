<script lang="ts" setup>
import type { Home } from "~/interfaces/home";
import { home } from "~/queries";
import { useBreakpoints } from '~~/composables/useBreakpoints';

const SiteIcon = resolveComponent("SiteIcon");
const Devicon = resolveComponent("Devicon");
const currentComponent = shallowRef(Devicon);

const photoIndex: Ref<number> = ref(0);
const hovered: Ref<boolean> = ref(false);

const query: string = home;
const { data: content } = await useSanityQuery<Home>(query);
const homeContent = content.value as Home;

console.log(homeContent.header.portraits);

const { pixels, toggleElementOnResize } = useBreakpoints();
const show = ref(false);

onMounted(() => {
    setInterval(() => {
        photoIndex.value++;
        if (photoIndex.value >= homeContent.header.portraits.length) photoIndex.value = 0;
    }, 60000);

    const renderElements = () => {
        const body = document.querySelector("body") as HTMLBodyElement;
        console.log(body.clientWidth)
        show.value = pixels.value < body.clientWidth ? true : false;
        console.log(show.value);
    }

    if (process.client) {
        toggleElementOnResize(1023);
        renderElements();

        window.addEventListener("resize", () => {
            toggleElementOnResize(1023);
            renderElements();
        });
    }
});

watch(() => hovered.value, (newValue, oldValue) => {
    console.log("Old Value is: " + oldValue);
    console.log("New value is: " + newValue);
    currentComponent.value = hovered.value ? SiteIcon : Devicon;
});
</script>

<template>
    <header class="header tete">
        <figure @mouseover="hovered = true" @mouseleave="hovered = false" class="header__logo">
            <component :is="currentComponent">
            </component>
        </figure>
        <div class="header__title">
            <h1 class="header__title--primary">
                <span>{{ homeContent.header.name }}</span>
                <span>{{ homeContent.header.middleName }}</span>
                <span>{{ homeContent.header.surname }}</span>
            </h1>
        </div>
        <figure class="autoportrait">
            <SanityImage v-for="(currentImage, index) in homeContent.header.portraits"
                :asset-id="currentImage.asset._ref" :key="index" auto="format" :class="{ opaque: index === photoIndex }"
                class="autoportrait-img" />
        </figure>
        <FlexContainer layout="row" contentJustify="space-around" itemsAlign="end" class="header__buttons">
            <Button to="/blog" isLink isExternal text="Read Blogs" colourPrimary="#fefefe" colourSecondary="#07343f"
                class="btn-test" />
            <Button to="/projects" isLink isExternal text="View Projects" colourPrimary="#fefefe"
                colourSecondary="#07343f" class="btn-test" />
        </FlexContainer>
    </header>
</template>

<style lang="scss" scoped>
.header {
    min-height: 100vh; // on le ramene
    width: 100%;
    position: relative;
    display: grid;

    @include breakpoint(1023) {
        min-height: max-content;
        padding-bottom: 3rem;
        place-items: center;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        // order: 1; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
    }

    // TESTING
    & .icon {
        align-self: center;
        grid-column: 2 / 3;
        transform: translateX(-10rem);
        // transform: translate(-10rem, -5rem); // deplacer vers le gauche juste un peu na juu kidogo

        @include breakpoint(1023) {
            grid-column: 1 / 2; //NOTE; reinitialise la configuration dessus
            transform: translateX(0);
        }
    }

    & .autoportrait {
        position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        opacity: 0.175;
        z-index: -100; // Le carousel etait dessus les boutons, ca fixe

        &-img {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; // makes it look nicer
            background-image: linear-gradient(to bottom,
                    transparent 0%,
                    transparent 90%,
                    rgba(255, 255, 255, 1) 90%,
                    rgba(255, 255, 255, 1) 100%);
            opacity: 0;
            transition: opacity 1s ease-in-out;

            &.opaque {
                opacity: 1;
            }
        }
    }

    &__logo {
        display: inline-block;
        position: absolute;
        top: 3rem;
        left: 3rem;
        width: 7rem;
        height: 7rem;
        z-index: 1000;

        & img {
            width: 100%;
            height: 100%;
        }

        & i[class^="devicon"] {
            font-size: 7rem;
        }
    }

    &__title {
        grid-column: 1 / 2;
        place-self: center;
        text-align: center;
        padding-right: 7rem;
        margin-top: 7rem;
        z-index: 1000;
        color: $steelblue;
        // transform: translateY(-5rem);

        @include breakpoint(1023) {
            padding-right: unset; //NOTE: so this does work. same as padding-right: 0;
            margin-top: 12rem;
        }

        &--primary {
            font-size: 13.5rem;
            font-weight: 600;
            text-transform: uppercase;
            padding-bottom: 2rem;
            //TESTING
            opacity: 1;
            transition: all 2.5s ease;

            @include breakpoint(767) {
                margin-top: 4rem;
                font-size: 9rem;
            }

            span {
                display: block;

                //NOTE: not sure if i want this yet
                // &:nth-of-type(2) {
                //     margin-left: 15rem;
                // }

                // &:nth-of-type(3) {
                //     margin-left: 40rem;
                // }
            }
        }

        &--secondary {
            font-size: 4rem;
            height: 4.5rem; // To give it a fixed witdth so that the button doesn't move up when there's not text,
        }
    }

    // NOTE: this styles the FlexContainer in this section only
    &__buttons {
        width: 50rem;
        margin: 6rem auto;
    }

    &__slider {
        height: 100%;
        width: 100%;
        position: relative;

        &--slide {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
        }
    }
}

// header animation
@keyframes fade-title {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

// TESTING
.btn-test {
    // opacity: 0;
}
</style>
