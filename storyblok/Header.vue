<script setup>
import { filename } from 'pathe/utils';
import { useBreakpoints } from '~~/composables/useBreakpoints';
const glob = import.meta.glob('~/assets/images/*', { eager: true });
const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
);
const selfPortraits = ["autoportrait-croquis", "autoportrait-croquis-2", "autoportrait-croquis-3", "moi-high-top"];
const logo = ["my-logo"];

const photoIndex = ref(0);

// TESTING:
const props = defineProps({ blok: Object });
console.log(props.blok);
console.log(props.blok.portraits)


const { pixels, toggleElementOnResize } = useBreakpoints();
const show = ref(null);

onMounted(() => {
    setInterval(() => {
        photoIndex.value++;
        if (photoIndex.value >= props.blok.portraits.length) photoIndex.value = 0;
    }, 30000);

    const renderElements = () => {
        const body = document.querySelector("body");
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
        })


    }
});
</script>

<template>
    <header class="header tete" v-editable="blok">
        <img src="@/assets/images/svg/my-logo.svg" alt="my-logo" class="header__logo" />
        <div class="header__title">
            <h1 class="header__title--primary">
                <span>{{ blok.firstname }}</span>
                <span>{{ blok.middlename }}</span>
                <span>{{ blok.surname }}</span>
            </h1>
            <div class="header__buttons">
                <NuxtLink to="/projects" target="_blank" class="header__buttons--button">View Projects</NuxtLink>
                <NuxtLink to="/blog" class="header__buttons--button">Read Blogs</NuxtLink>
                <NuxtLink to="/login" class="header__buttons--button">Login</NuxtLink>

            </div>
        </div>
        <div class="icon" style="align-self: center;">
            <Devicon />
        </div>

        <figure class="autoportrait" v-if="show">
            <img v-for="(currentPortrait, index) in blok.portraits" :src="currentPortrait.filename" alt="Croquis de moi"
                :class="{ opaque: index === photoIndex }" class="autoportrait-img" />
        </figure>
    </header>
</template>

<style lang="scss" scoped>
.header {
    min-height: 100vh; // on le ramene
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 50% min-content 1fr;

    @include breakpoint(1023) {
        // min-height: max-content;
        padding-bottom: 3rem;
        place-items: center;
        grid-template-columns: 1fr;
        grid-auto-rows: min-content;
        order: 1; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
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
        position: relative;
        margin-top: 3rem;
        justify-self: end;
        align-self: end;
        width: 100%;
        height: 100%;
        grid-column: 3 / 4;

        &-img {
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover; // makes it look nicer
            margin-left: 7.5rem;
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
        width: 9rem;
        height: 9rem;
        z-index: 1000; //j'ai besoin de cette ligne
    }

    &__title {
        grid-column: 1 / 2;
        place-self: center;
        text-align: center;
        padding-right: 7rem;
        margin-bottom: 7rem;
        z-index: 1000;
        color: $steelblue;
        // transform: translateY(-5rem);

        @include breakpoint(1023) {
            padding-right: unset; //NOTE: so this does work. same as padding-right: 0;
            margin-top: 12rem;
        }

        &--primary {
            font-size: 10.5rem;
            font-weight: 600;
            text-transform: uppercase;
            padding-bottom: 2rem;
            //TESTING
            opacity: 1;
            transition: all 2.5s ease;

            span {
                display: block;
            }
        }

        &--secondary {
            font-size: 4rem;
            height: 4.5rem; // To give it a fixed witdth so that the button doesn't move up when there's not text,
        }
    }

    // NOTE: Je vais ce deplacer
    &__buttons {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &--button {
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

            // &:focus {
            // 	outline: none;
            // }
            &:hover {
                background-color: #fff;
                color: $steelblue;
            }
        }
    }

    &__button {}

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
</style>
