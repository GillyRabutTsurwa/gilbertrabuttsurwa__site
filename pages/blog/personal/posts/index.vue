<script setup lang="ts">
import groq from "groq";
import { usePostsStore } from "@/stores/posts"
import { Post } from "~/interfaces/post";

interface Page {
  currentPage: number;
  postsPerPage: number
}

// VARIABLES
const query: string = groq`*[_type == "personal-post"]`;
const state: Page = reactive({
  currentPage: 1,
  postsPerPage: 8
});

// COMPOSABLES
const { data: posts } = await useSanityQuery(query);
const store = usePostsStore();

// COMPUTED VALUES
const indexOfLastPost: ComputedRef<number> = computed(() => {
  return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost: ComputedRef<number> = computed(() => {
  return indexOfLastPost.value - state.postsPerPage;
});

//NOTE: this signifies the current posts on the page
const currentPosts: ComputedRef<Post[]> = computed(() => {
  return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

// FUNCTIONS
function renderPagination(eventPayload: number) {
  state.currentPage = eventPayload;
  console.log(eventPayload);
}

// CODE TO RUN ON COMPONENT CREATION
store.posts = posts.value;
store.filteredPosts = posts.value;

// LIFECYCLE HOOKS
onUpdated(() => {
  console.log(currentPosts.value);
});
</script> 
  
<template>
  <Navigation />
  <FlexContainer layout="column">
    <Categories :posts="store.posts" listDisplay="row" />
    <Posts type="personal" :posts="store.filteredPosts" />
    <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
      @paginate="renderPagination($event)" />
    <!-- <Newsletter /> NOTE: je suis pas sur que je vais le rendre ici ou pas -->
  </FlexContainer>
</template>
    
<style lang="scss" scoped>
.containertings {
  display: flex;
  flex-direction: column;

  // @include breakpoint(1023) {
  //   flex-direction: column;
  // }
}

.margin-top {
  margin-top: 4rem;
}
</style>