<script setup>
import groq from "groq";
import { usePostsStore } from '@/stores/posts';

const query = groq`*[_type == "personal-post"]`;
const { data: posts } = await useSanityQuery(query);
const store = usePostsStore();

console.log(posts.value);

store.posts = posts.value;
store.filteredPosts = posts.value;

const state = reactive({
  currentPage: 1,
  postsPerPage: 8
});

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

//NEW: send sanity posts to server
const sendPostsToServer = async () => {
  const { data: allPosts } = await useFetch("/api/blogs/personal", {
    method: "POST",
    body: posts.value
  });
  console.log("Posts", allPosts.value); //Not really doing anything with this
}

sendPostsToServer();

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
        <!-- <PostsPersonal :posts="currentPosts" /> -->
        <!-- NOTE: below post doesnt exist yet -->
        <Posts type="personal" :posts="currentPosts" />
      </template>
      <template v-slot:pagination>
        <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
          @paginate="renderPagination($event)" />
      </template>
    </Main>
    <Aside>
      <template v-slot:categories>
        <Categories :posts="store.posts" />
      </template>
      <template v-slot:instaposts>
        <Instaposts />
      </template>
      <template v-slot:newsletter>
        <Newsletter />
      </template>
    </Aside>
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