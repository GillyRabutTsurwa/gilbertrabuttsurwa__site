<script setup lang="ts">
import groq from "groq";
import { usePostsStore } from "@/stores/posts";
import { ComputedRef } from "vue";
import { Post } from "~/interfaces/post";

const query: string = groq`*[_type == "tech-post"]`;
const { data: posts } = await useSanityQuery(query)
const store = usePostsStore();

store.techPosts = posts.value;
store.filteredTechPosts = posts.value;

interface Page {
  currentPage: number;
  postsPerPage: number;
}

const state: Page = reactive({
  currentPage: 1,
  postsPerPage: 8
});

const indexOfLastPost: ComputedRef<number> = computed(() => {
  return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost: ComputedRef<number> = computed(() => {
  return indexOfLastPost.value - state.postsPerPage;
});

// NOTE: this signifies the current posts on the page
const currentPosts: ComputedRef<Post[]> = computed(() => {
  return store.filteredTechPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});

onUpdated(() => {
  console.log(currentPosts.value);
})

function renderPagination(eventPayload: number) {
  state.currentPage = eventPayload;
  console.log(eventPayload);
}
</script> 
  
<template>
  <Navigation />
  <FlexContainer layout="column">
    <Categories :posts="store.techPosts" listDisplay="row" />
    <Posts type="tech" :posts="store.filteredTechPosts" />
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