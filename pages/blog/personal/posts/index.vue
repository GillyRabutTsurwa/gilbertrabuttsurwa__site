<script setup>
import groq from "groq";
import { usePostsStore } from "@/stores/posts";

const query = groq`*[_type == "personal-post"]`;
const { data: posts } = await useSanityQuery(query);
const store = usePostsStore();

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
  <Navigation />
  <FlexContainer layout="column">
    <Categories :posts="store.posts" listDisplay="row" />
    <PostsPersonal :posts="store.filteredPosts" />
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