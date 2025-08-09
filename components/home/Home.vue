<script setup lang="ts">
import type { Home } from "~/interfaces/home";
import type { PostInt } from "~/interfaces/post";

import { home, posts } from "~/queries";

const homeQuery: string = home;
const postQuery: string = posts("personal");

const { data: content } = await useSanityQuery<Home>(homeQuery);
const { data: blogs } = await useSanityQuery<PostInt[]>(postQuery);
</script>

<template>
    <HomeNav />
    <section id="app">
        <Header :content />
        <Marquee />
        <Showcase />
        <Certifications :blogs />
        <Form />
        <Footer />
    </section>
</template>


<style lang="scss" scoped>
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

// NOTEIMPORTANT: this is for the instance of the spinner component in this component.
// i am overwriting the normal height
.loader {
    height: 100vh;
}

// transition classes
.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity 0.75s ease;
}

.component-fade-enter,
.component-fade-leave-to {
    /* transform: rotateY(90deg); */
    opacity: 0;
    /* transform: translateX(300px); */
}
</style>
