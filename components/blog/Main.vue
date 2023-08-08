<script setup>
import { usePostsStore } from '@/stores/posts';
const { data: posts } = await useFetch("/api/blogs/personal");

const state = reactive({
    currentPage: 1,
    postsPerPage: 8
});
const store = usePostsStore();
// await store.fetchPosts();
store.posts = posts.value;
store.filteredPosts = posts.value;

const indexOfLastPost = computed(() => {
    return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost = computed(() => {
    return indexOfLastPost.value - state.postsPerPage;
});

// this signifies the current posts on the page
const currentPosts = computed(() => {
    return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

onUpdated(() => {
    console.log(currentPosts.value);
})

function renderPagination(eventPayload) {
    state.currentPage = eventPayload;
    console.log(eventPayload);
}
</script>
<template>
    <main>
        <slot name="post-list"></slot>
        <slot name="pagination"></slot>
    </main>
</template>


<style lang="scss" scoped></style>