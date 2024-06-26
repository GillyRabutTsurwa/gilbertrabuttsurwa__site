<script setup lang="ts">
import groq from "groq";
import type { StateTree, Store } from "pinia";
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
const store: Store<"posts", StateTree> = usePostsStore();
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
  <div class="grid-test">
    <Posts type="personal" :posts="currentPosts" class="posto" />
    <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredPosts.length"
      @paginate="renderPagination($event)" class="pago" />
    <Categories :posts="store.posts" class="catego" />
    <Instaposts class="insto" />
    <!-- <h5 class="newso">Newsletter Coming Soon</h5> -->
  </div>
  <FooterX />
</template>


<style lang="scss" scoped>
.grid-test {
  display: grid;
  grid-template-columns: 1fr 50rem;
  grid-template-rows: subgrid;
  grid-template-areas:
    "posts categories"
    "posts categories"
    "posts insta"
    "posts newsletter"
    "pagination .";

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