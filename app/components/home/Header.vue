<script lang="ts" setup>
import type { Home } from '~/interfaces/home';
const props = defineProps({
    content: {
        type: Object as PropType<Home | null>,
        required: true
    }
})

const randomPhoto = computed(() => {
    if (!props.content) return;

    const randomIndex = Math.floor(Math.random() * props.content.header.portraits.length);
    const randomImgURL = props.content?.header.portraits[randomIndex].asset._ref;
    return {
        index: randomIndex,
        url: randomImgURL
    }                   
});
</script>

<template>
    <header v-if="props.content" class="header tete">
        <figure class="header__logo">
            <Devicon/>
        </figure>
        <div class="header__title">
            <h1 class="header__title--primary">
                <span>{{ props.content.header.name }}</span>
                <span>{{ props.content.header.middleName }}</span>
                <span>{{ props.content.header.surname }}</span>
            </h1>
            <h2 class="header__title--secondary">Full Stack Developer</h2>
        </div>
        <figure class="autoportrait">
            <SanityImage :asset-id="randomPhoto.url" auto="format" class="autoportrait-img" />
        </figure>
        <FlexContainer layout="row" contentJustify="start" itemsAlign="start" class="flex-container-custom">
            <Button to="/blog" isLink text="Read Blogs" colourPrimary="#e6b376" colourSecondary="#101d2c"
                class="btn-test" />
            <Button to="/projects" isLink isExternal text="View Projects" colourPrimary="#e6b376"
                colourSecondary="#101d2c" class="btn-test" />
        </FlexContainer>
    </header>
</template>

<style lang="scss" scoped>
.header {
    min-height: 100vh; // on le ramene
    width: 100%;
    position: relative;
    display: grid;
    background-color: $colour-primary;

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
        opacity: 0.05;
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
            // opacity: 0;
            transition: opacity 1s ease-in-out;
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
        place-self: center start;
        // text-align: center;
        padding-right: 7rem;
        margin-left: 3rem;
        z-index: 1000;
        color: $colour-secondary;

        @include breakpoint(1023) {
            padding-right: unset; //NOTE: so this does work. same as padding-right: 0;
            margin-top: 12rem;
        }

        &.gauche {
            place-self: end start;
            margin-left: 10rem;
        }

        &--primary {
            font-size: 12rem;
            font-weight: 600;
            padding-bottom: 2rem;
            //TESTING
            opacity: 1;
            transition: all 2.5s ease;

            @include breakpoint(767) {
                margin-top: 4rem;
                font-size: 9rem;
            }

            span {
                margin-right: 4rem;

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
            font-size: 7rem;
            height: 4.5rem; // To give it a fixed witdth so that the button doesn't move up when there's not text,
        }
    }

    // // NOTE: this styles the FlexContainer in this section only
    // &__buttons {
    //     width: 50rem;
    //     margin: 6rem auto;

    //     &.gauche {
    //         place-self: end start;
    //         margin-left: 10rem;
    //         margin-bottom: 20rem;

    //         @include breakpoint(480) {
    //             margin: 5rem auto;
    //         }
    //     }
    // }

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


.flex-container-custom {
    margin-left: 3rem;

    &>* {
        margin-right: 3rem;
    }
}

.icon {
    color: $colour-secondary !important;
}
</style>