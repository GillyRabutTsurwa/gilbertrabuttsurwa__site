<script>
    import { onMount } from "svelte";
    import { browser } from "$app/environment";
    import { showElement, toggleElementOnResize } from "@/lib/store/useBreakpoint";
    import Devicon from "$lib/components/shared/Devicon.svelte";
    import imageOne from "$lib/images/autoportrait-croquis.png";
    import imageTwo from "$lib/images/autoportrait-croquis-2.png";
    import imageThree from "$lib/images/autoportrait-croquis-3.png";
    import imageFour from "$lib/images/moi-high-top.png";
    import Logo from "$lib/svg/my-logo.svg";

    const myPhotos = [imageThree, imageOne, imageTwo];

    let imageContainer;
    let photoIndex = 0;

    if (browser) window.addEventListener("resize", () => toggleElementOnResize(1023));

    onMount(() => {
        setInterval(() => {
            photoIndex++;
            if (photoIndex >= myPhotos.length) photoIndex = 0;
        }, 15000);
        if (browser) toggleElementOnResize(1023);
    });

    $: {
        console.log($showElement);
    }
</script>

<header class="header">
    <img src={Logo} alt="my-logo" class="header__logo" />
    <div class="header__title">
        <h1 class="header__title--primary">Gilbert<span>Rabut</span><span>Tsurwa</span></h1>
        <div class="header__title--secondary">
            <span class="text-type" data-wait="3000" data-words={["Developper", "Designer", "Creator", "Food Enthusiast"]} />
        </div>
        <div class="header__buttons">
            <a href="/projects" target="_blank" class="header__buttons--button"> All my Projects </a>
            <a href="https://gilbertrabuttsurwa.blog" target="_blank" rel="noreferrer" class="header__buttons--button">My Blog</a>
        </div>
    </div>
    <div class="icon" style="align-self: center;">
        <Devicon />
    </div>
    {#if !$showElement}
        <figure class="autoportrait" bind:this={imageContainer}>
            {#each myPhotos as currentPhoto, index}
                <img src={currentPhoto} alt="Croquis de moi" class="autoportrait-img" class:opaque={index === photoIndex} />
            {/each}
        </figure>
    {/if}
</header>

<style lang="scss">
    @use "../../sass/variables";

    .header {
        height: 100vh; // on le ramene
        width: 100%;
        position: relative;
        display: grid;
        grid-template-columns: 56% min-content 1fr;

        // TESTING
        & .icon {
            align-self: center;
            grid-column: 2 / 3;
            transform: translateX(-10rem); // deplacer vers le gauche juste un peu
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
                width: 77rem;
                height: 96rem;
                // width: 100%;
                // height: 100%;
                object-fit: cover; // makes it look nicer
                margin-left: 7.5rem;
                background-image: linear-gradient(
                    to bottom,
                    transparent 0%,
                    transparent 90%,
                    rgba(255, 255, 255, 1) 90%,
                    rgba(255, 255, 255, 1) 100%
                );
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
            color: variables.$steelblue;

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
                background-color: variables.$steelblue;
                cursor: pointer;
                z-index: 10000;
                // &:focus {
                // 	outline: none;
                // }
                &:hover {
                    background-color: #fff;
                    color: variables.$steelblue;
                }
            }
        }
        &__button {
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
    .invisible-title {
        visibility: hidden;
        opacity: 0;
    }
    .birds-chilling {
        background-position-y: 20rem;
    }
    .leaf {
        background-position-y: 1%;
    }
    .vikombe {
        background-position-y: 100%;
    }
    .twiga {
        background-position-y: 95%;
    }
    .kenyanFlag {
        background-position-x: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: all 3s ease-in;
        overflow: hidden;
        visibility: visible;
        position: absolute;
        width: 100%;
        opacity: 1;
    }
    .fade-enter,
    .fade-leave-to {
        visibility: hidden;
        width: 100%;
        opacity: 0;
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
