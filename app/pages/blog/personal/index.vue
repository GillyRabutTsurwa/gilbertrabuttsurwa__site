<script setup lang="ts">
import { posts } from "~~/queries";
import type { PostInt } from "~~/interfaces/post";
import type { StateTree, Store } from "pinia";
import { usePostsStore } from '@/stores/posts';

interface Page {
    currentPage: number;
    postsPerPage: number;
}

// VARIABLES
const query: string = posts("personal");
const flexDir: Ref<string> = ref("");
const state: Page = reactive({
    currentPage: 1,
    postsPerPage: 8
});

// COMPOSABLES
const store: Store<"posts", StateTree> = usePostsStore();
// const { data: blogs } = await useFetch("/api/blogs/personal") || await useSanityQuery<PostInt>(query);
const { data: blogs } = await useSanityQuery<PostInt>(query);



// COMPUTED VALUES
const indexOfLastPost: ComputedRef<number> = computed(() => {
    return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost: ComputedRef<number> = computed(() => {
    return indexOfLastPost.value - state.postsPerPage;
});

const currentPosts = computed(() => {
    return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});


// FUNCTIONS
function renderPagination(eventPayload: number) {
    state.currentPage = eventPayload;
}


console.log(blogs.value);


// CODE TO RUN ON COMPONENT CREATION
store.posts = blogs.value;
store.filteredPosts = blogs.value;

// allPosts.value?.forEach


// LIFECYCLE HOOKS
onMounted(() => {
    if (process.client) {
        const mediaQueryList = window.matchMedia("(max-width: 1023px)");
        flexDir.value = mediaQueryList.matches ? "column" : "row";
    }
});
</script>

<template>
    <Navigation>
        <template #logo>
            <LogoX />
        </template>
        <template #links>
            <li class="navigation__list--item">
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li class="navigation__list--item">
                <NuxtLink to="/blog">Blogs</NuxtLink>
            </li>
            <li class="navigation__list--item">
                <NuxtLink to="/blog/authours/gilbert-rabut-tsurwa">About Me</NuxtLink>
            </li>
            <DevOnly>
                <li class="navigation__list--item">
                <NuxtLink to="/blog/uncensored">Uncensored Posts</NuxtLink>
                </li>
            </DevOnly>
            <li class="navigation__list--item">
                <NuxtLink to="/shop" target="_blank" rel="noreferrer noopener">Shop</NuxtLink>
            </li>
        </template>
    </Navigation>
    <BlogHeader />
    <FlexContainer layout="row-reverse">
        <Categories :posts="store.posts" />
        <Posts type="personal" :posts="currentPosts" />
    </FlexContainer>
    <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
        @paginate="renderPagination($event)" />
    <Footer />
</template>


<style lang="scss" scoped>
.grid-test {
    display: grid;
    grid-template-columns: 1fr 50rem;
    grid-template-rows: subgrid;
    overflow: hidden;

    @include breakpoint(767) {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;
    }
}


.body-tings {
    display: flex;
    // margin: 2.5rem;

    @include breakpoint(1023) {
        flex-direction: column;
    }
}

.posto {
    grid-area: posts;

    @include breakpoint(767) {
        grid-area: unset;
        order: 2;
    }
}

.pago {
    grid-area: pagination;

    @include breakpoint(767) {
        grid-area: unset;
        order: 3;
    }
}

.catego {
    grid-area: categories;
    align-self: center;

    @include breakpoint(767) {
        width: 100%;
        grid-area: unset;
        order: 1;
    }
}

.insto {
    grid-area: insta;
    place-self: center;

    @include breakpoint(767) {
        grid-area: unset;
        align-self: center;
        order: 4;
        margin: 0 auto;
    }
}

.newso {
    grid-area: newsletter;

    @include breakpoint(767) {
        grid-area: unset;
        order: 5;
        margin: 0 auto;
    }
}
</style>