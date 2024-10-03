<script setup>
const { showElement, toggleElementOnResize } = useBreakpoints();
const props = defineProps({ blok: Object });

if (process.client) window.addEventListener("resize", () => (toggleElementOnResize(767)));
onMounted(() => {
    if (process.client) toggleElementOnResize(767);
});
</script>

<template>
    <div v-editable="blok" class="showcase">
        <div class="showcase-top">
            <NuxtLink v-if="!showElement" to="https://github.com/GillyRabutTsurwa" target="_blank">
                <i class="devicon-github-plain" />
                <span>GitHub Repo</span>
            </NuxtLink>
            <h2 style="font-size: 4rem;">{{ props.blok.main_title }}</h2>
            <NuxtLink v-if="!showElement" to="https://gilbertrabuttsurwa.blog" target="_blank">
                <i class="devicon-devicon-plain" />
                <span>Blog Site</span>
            </NuxtLink>
        </div>

        <h2 class="showcase-language-subtitle">{{ props.blok.css_title }}</h2>
        <ul class="showcase__list">
            <Project v-for="(currentProject, index) in props.blok.projects_css" :key="index"
                :project="currentProject" />
        </ul>

        <h2 class="showcase-language-subtitle">{{ props.blok.js_title }}</h2>
        <ul class="showcase__list">
            <Project v-for="(currentProject, index) in props.blok.projects_js" :key="index" :project="currentProject" />
        </ul>

        <h2 class="showcase-language-subtitle">{{ props.blok.vue_title }}</h2>
        <ul class="showcase__list">
            <Project v-for="(currentProject, index) in props.blok.projects_vue" :key="index"
                :project="currentProject" />
        </ul>

        <h2 class="showcase-language-subtitle">{{ props.blok.svelte_title }}</h2>
        <ul class="showcase__list">
            <Project v-for="(currentProject, index) in props.blok.projects_svelte" :key="index"
                :project="currentProject" />
        </ul>

        <h2 class="showcase-language-subtitle">{{ props.blok.react_title }}</h2>
        <ul class="showcase__list">
            <Project v-for="(currentProject, index) in props.blok.projects_react" :key="index"
                :project="currentProject" />
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.showcase {
    width: 100%;
    height: 100%;
    background-color: $steelblue;
    color: $default-grey;
    padding: 0 3rem;

    &-top {
        padding: 6rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 8vh;

        @include breakpoint(767) {
            flex-direction: column;
            margin-bottom: 5rem;
        }

        & a {

            &,
            &:link,
            &:visited {
                // margin-right: auto;
                text-decoration: none;
                color: #1a2934;
                background-color: #fff;
                padding: 1rem 2.1rem;
                transition: all 0.2s ease-in-out;
                border: 2px solid transparent;
            }

            &:hover,
            &:active {
                color: #fff;
                background-color: #1a2934;
                border: 2px solid #fff;
            }

            i {
                margin-right: 1rem;
            }
        }
    }

    &-language-subtitle {
        font-size: 3rem;
        // &:not(:first-child) {
        margin: 3rem 3rem 3rem 0;
        text-align: right;
        grid-column: 1 / -1;

        @include breakpoint(767) {
            text-align: center;
        }
    }

    &__list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
        gap: 3rem;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        justify-content: space-evenly;
    }
}
</style>
