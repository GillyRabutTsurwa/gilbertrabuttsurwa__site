<script setup lang="ts">
import groq from "groq";
import { usePostsStore } from '@/stores/posts';

interface Page {
  currentPage: number;
  postsPerPage: number;
}

// VARIABLES
const query: string = groq`*[_type == "post" && postGenre == "personal"]`;
const flexDir: Ref<string> = ref("");
const state: Page = reactive({
  currentPage: 1,
  postsPerPage: 8
});

// COMPOSABLES
const store = usePostsStore();
const { data: posts } = await useSanityQuery(query);


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

//NEW: send sanity posts to server
async function sendPostsToServer() {
  const { data: allPosts } = await useFetch("/api/blogs/personal", {
    method: "POST",
    body: posts.value
  });
  console.log("Posts", allPosts.value); //Not really doing anything with this
}

// CODE TO RUN ON COMPONENT CREATION
store.posts = posts.value;
store.filteredPosts = posts.value;
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