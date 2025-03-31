<script setup lang="ts">
import { posts } from "~/queries";
import type { Post } from "~/interfaces/post";
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
const { data: blogs } = await useSanityQuery<Post>(query);


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
    console.log(eventPayload);
}

async function sendPostsToServer() {
    const { data: allPosts } = await useFetch("/api/blogs/personal", {
        method: "POST",
        body: blogs.value
    });
    console.log("Posts", allPosts.value); //Not really doing anything with this
}

// CODE TO RUN ON COMPONENT CREATION
store.posts = blogs.value;
store.filteredPosts = blogs.value;
sendPostsToServer();

// LIFECYCLE HOOKS
onMounted(() => {
    if (process.client) {
        const mediaQueryList = window.matchMedia("(max-width: 1023px)");
        console.log(mediaQueryList);
        flexDir.value = mediaQueryList.matches ? "column" : "row";

    }
});
onUpdated(() => {
    console.log(currentPosts.value);
})
</script>

<template>
    <Navigation />
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