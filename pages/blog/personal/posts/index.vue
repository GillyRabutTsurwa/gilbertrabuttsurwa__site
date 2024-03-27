<script setup lang="ts">
import groq from "groq";
import { usePostsStore } from "@/stores/posts"
import type { Post } from "~/interfaces/post";
import type { StateTree, Store } from "pinia";

interface Page {
  currentPage: number;
  postsPerPage: number
}

// VARIABLES
const query: string = groq`*[_type == "post" && postGenre == "personal"]`;
const state: Page = reactive({
  currentPage: 1,
  postsPerPage: 8
});

// COMPOSABLES
const { data: posts } = await useSanityQuery(query);
/**
 * NOTEIMPORTANT:
 * below code fixes the type issue of assigning store values,
 * like when I do store.posts = posts.value
 * i think what is happening is when i pass the ID of my store to this generic, which is posts...
 * ... the StateTree "argument" seems to take care of the rest, knowing what types are acceptable based on my store definitions
 * i am not 100% that is the case, but this is what i think is happening
 * 
 * edit: i think this is even more so the case, because putting in the wrong in the generic will throw an error
 * found the solution thanks to this StackOverflow post
 * https://stackoverflow.com/questions/69833591/how-to-set-the-type-for-the-state-object-in-pinia
 */
const store: Store<"posts", StateTree> = usePostsStore();

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