<script setup lang="ts">
import groq from 'groq';
import { usePostsStore } from '@/stores/posts';

const query = groq`*[_type == "personal-post"]`;
const { data: posts } = await useSanityQuery(query);

const props = defineProps({
  listDisplay: {
    type: String,
    default: "column"
  }
})
const store = usePostsStore();
const populatePosts = () => {
  store.posts = posts.value;
  store.filteredPosts = posts.value;
}

const categories = store.posts.map((currentPost) => currentPost.categories);
const categoriesList = computed(() => {
  //NOTE: i think this may have been the issue
  // if i don't give the posts a category, this array gets populated with a value of undefined for that post
  // so, therefore, the solution must be to remove the undefined values from this array (in case i forget to add a category to the post)
  // i do this below
  return [...new Set(categories.flat())].filter((currentValue) => currentValue !== undefined);
});

console.log(categoriesList.value);

function getNumOfPostsByCategory(category) {
  //NOTE: site still breaks because this does not (and should not) filter posts that have no category tags
  // so it's trying to look the the category property from a post that has none, ie undefined
  // so the solution is to ALWAYS put category tags on all posts
  return store.posts.filter((currentPost) => currentPost.categories.includes(category)).length;
}

async function testFilter(category) {
  // await store.filterPosts(category)
  store.filteredPosts = store.posts.filter((currentPost) => currentPost.categories.includes(category));
}

// NOTE: style
const listStyle = computed(() => {
  const displayStyle = {
    display: props.listDisplay === "row" ? "flex" : "block",
    justifyContent: props.listDisplay === "row" ? "space-around" : ""
  }
  return displayStyle;
})
</script>

<template>
  <div class="category">
    <h4 class="category__title">Categories</h4>
    <ul class="category__list" :style="listStyle">
      <!-- will put code below in a function + tard -->
      <li @click="populatePosts">
        <span>All</span>
        <span>&nbsp;</span>
        <span>({{ store.posts.length }})</span>
      </li>
      <li v-for="currentCategory in categoriesList" :key="currentCategory" @click="testFilter(currentCategory)">
        <span>{{ currentCategory }}</span>
        <span>&nbsp;</span>
        <span>({{ getNumOfPostsByCategory(currentCategory) }})</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

.category {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 4rem 0;
  width: inherit;

  &__title {
    align-self: center;
    font-size: 4rem;
  }

  &__list {
    list-style-type: none;
    width: 70%;
    margin-top: 1.5rem;

    li {
      margin-bottom: 2rem;
      background-color: abstracts.$colour-primary;
      color: abstracts.$whitish;
      // font-weight: bold;
      padding: 1.1rem 1.5rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
    }
  }
}

// dynamic class
.row {
  display: flex;
  justify-content: space-around;
}
</style>
