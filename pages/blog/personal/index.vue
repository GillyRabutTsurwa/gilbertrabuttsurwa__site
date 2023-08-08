<script setup>
import { usePostsStore } from '@/stores/posts';

const state = reactive({
  currentPage: 1,
  postsPerPage: 8
});
const store = usePostsStore();
await store.fetchPosts();


const indexOfLastPost = computed(() => {
  return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost = computed(() => {
  return indexOfLastPost.value - state.postsPerPage;
});

const currentPosts = computed(() => {
  return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

function renderPagination(eventPayload) {
  state.currentPage = eventPayload;
  console.log(eventPayload);
}

const { pixels, toggleElementOnResize } = useBreakpoints();


const flexDir = ref("");
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
  <HeaderX />
  <FlexContainer :layout="flexDir">
    <Main>
      <template v-slot:post-list>
        <PostsPersonal :posts="currentPosts" />
      </template>
      <template v-slot:pagination>
        <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
          @paginate="renderPagination($event)" />
      </template>
    </Main>
    <Aside />
  </FlexContainer>
</template>
  
  
<style lang="scss" scoped>
.body-tings {
  display: flex;
  // margin: 2.5rem;

  @include breakpoint(1023) {
    flex-direction: column;
  }
}
</style>