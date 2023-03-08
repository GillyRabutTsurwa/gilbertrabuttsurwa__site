<script>
    import { onMount } from "svelte";
    import Devicon from "$lib/components/shared/Devicon.svelte";
    import imageOne from "$lib/images/header/adrian.jpg";
    import Logo from "$lib/svg/my-logo.svg";

    let currentIndex = 0;
    let currentIndexTwo = 0;

    let iconArray = [
        "html5-plain",
        "css3-plain",
        "sass-original",
        "javascript-plain",
        "vuejs-plain",
        "nuxtjs-plain",
        "react-plain",
        "bootstrap-plain",
        "tailwindcss-plain",
        "jquery-plain",
        "nodejs-plain",
        "express-original-wordmark",
        "mongodb-plain-wordmark",
        "git-plain",
        "github-plain",
        "webpack-plain",
        "babel-plain",
        "heroku-original-wordmark",
        "gulp-plain",
    ];

    // $: backgroundImage: `url(${imageOne})`

    const nextIcon = () => {
        currentIndexTwo += 1;
        if (currentIndexTwo > iconArray.length - 1) {
            currentIndexTwo = 0;
        }
    };

    const startIcons = () => {
        setInterval(nextIcon, 4000);
    };

    $: currentDevicon = iconArray[currentIndexTwo];

    onMount(() => {
        startIcons();
    });
</script>

<header class="header">
    <img src={Logo} alt="my-logo" class="header__logo" />
    <!-- <i class={`devicon-${currentDevicon}`} /> -->
    <!-- <Devicon class="header__devicon"/> -->
    <div class="header__title">
        <h1 class:selected={currentIndexTwo === 7} class="header__title--primary">Gilbert<span>Rabut</span><span>Tsurwa</span></h1>
        <div class="header__title--secondary">
            <span class="text-type" data-wait="3000" data-words={["Developper", "Designer", "Creator", "Food Enthusiast"]} />
        </div>
        <a href="/projects" target="_blank" class="header__button"> All my Projects </a>
    </div>
    <!-- SUBSECTION: gallery -->
    <div class="header__slider">
        <div style="background-image: url({imageOne})" class="header__slider--slide" />
    </div>
</header>

<style lang="scss">
    @use "../../sass/variables";

    .header {
        height: 100vh; // on le ramene
        width: 100%;
        position: relative;

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
            position: absolute;
            top: 11%;
            right: 5%;
            display: inline-block;
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
        &__button {
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
