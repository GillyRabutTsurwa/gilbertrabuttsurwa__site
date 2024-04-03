<script setup lang="ts">
import type { Post } from '~/interfaces/post';
import { usePostsStore } from '@/stores/posts';

const store = usePostsStore();

const props = defineProps({
  posts: {
    type: Array,
    required: true
  },
  listDisplay: {
    type: String,
    default: "column"
  }
});

console.log(props.posts);
props.posts.forEach((currentPost) => {
  console.log(currentPost.categories);
})

const state = reactive({
  currentPosts: []
})

const populatePosts = () => {
  store.posts = props.posts;
  store.filteredPosts = props.posts;
}

console.log(store.posts);

const categories: string[][] = store.posts.map((currentPost) => currentPost.categories);
const categoriesList: ComputedRef<string[]> = computed(() => {
  //NOTE: i think this may have been the issue
  // if i don't give the posts a category, this array gets populated with a value of undefined for that post
  // so, therefore, the solution must be to remove the undefined values from this array (in case i forget to add a category to the post)
  // i do this below
  return [...new Set(categories.flat())].filter((currentValue) => currentValue !== undefined);
});

console.log(categoriesList.value);

function getNumOfPostsByCategory(category: string): number {
  //NOTE: site still breaks because this does not (and should not) filter posts that have no category tags
  // so it's trying to look the the category property from a post that has none, ie undefined
  // so the solution is to ALWAYS put category tags on all posts
  return store.posts.filter((currentPost) => currentPost.categories.includes(category)).length;
}

// NOTE: style
const listStyle = computed(() => {
  const displayStyle = {
    display: props.listDisplay === "row" ? "flex" : "block",
    justifyContent: props.listDisplay === "row" ? "space-around" : ""
  }
  return displayStyle;
});

watch(() => state.currentPosts, (newValue, oldValue) => {
  console.log("value changed");
  console.log("from");
  //NOTE: i can access the values of the currentPosts array (as they change) using the spread operator
  console.log([...oldValue]);
  console.log("to");
  console.log([...newValue]);

  store.filteredPosts = store.posts.filter((currentPost: Post) => {
    return currentPost.categories.some((currentCategory: string) => {
      return [...newValue].includes(currentCategory);
    });
  });

  // NOTE: if the arrray that filters posts via the "checkbox" value is empty, show all the posts
  if (state.currentPosts.length === 0) populatePosts();
});
</script>

<template>
  <div class="category">
    <h4 class="category__title">Categories</h4>
    <ul class="category__list" :style="listStyle">
      <li v-for="currentCategory in categoriesList" :key="currentCategory">
        <input type="checkbox" :id="currentCategory" :value="currentCategory" v-model="state.currentPosts">
        <label :for="currentCategory">
          <span>{{ currentCategory }}</span>
          <span>({{ getNumOfPostsByCategory(currentCategory) }})</span>
        </label>
      </li>
    </ul>
    <div>{{ state.currentPosts }}</div>
  </div>
</template>

<style lang="scss" scoped>
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
      background-color: $colour-primary;
      color: $whitish;
      // font-weight: bold;
      padding: 1.5rem;
      border-radius: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;

      // cacher le checkbox
      input[type="checkbox"] {
        display: none;
      }

      label {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;


        span {
          font-size: 1.75rem;

          &:first-child {
            margin: 0 auto;
          }
        }
      }
    }
  }
}

// dynamic class
.row {
  display: flex;
  justify-content: space-around;
}
</style>
