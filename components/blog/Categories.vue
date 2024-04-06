<script setup lang="ts">
import type { StateTree, Store } from "pinia";
import type { Post } from '~/interfaces/post';
import { usePostsStore } from '@/stores/posts';

const store: Store<"posts", StateTree> = usePostsStore();
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

const state = reactive({
  currentPosts: []
})

const populatePosts = () => {
  store.posts = props.posts;
  store.filteredPosts = props.posts;
}

console.log(store.posts);

const categories: string[][] = store.posts.map((currentPost: Post) => currentPost.categories);
const categoriesList: ComputedRef<string[]> = computed(() => {
  return [...new Set(categories.flat())].filter((currentValue) => currentValue !== undefined);
});

console.log(categoriesList.value);

function getNumOfPostsByCategory(category: string): number {
  return store.posts.filter((currentPost: Post) => currentPost.categories.includes(category)).length;
}

const listStyle = computed(() => {
  const displayStyle = {
    display: props.listDisplay === "row" ? "flex" : "block",
    justifyContent: props.listDisplay === "row" ? "space-around" : ""
  }
  return displayStyle;
});

watch(() => state.currentPosts, (newValue: Array<string>, _) => {
  store.filteredPosts = store.posts.filter((currentPost: Post) => {
    return currentPost.categories.some((currentCategory: string) => {
      return [...newValue].includes(currentCategory);
    });
  });

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

  @include breakpoint(767) {
    margin-bottom: 0;
  }

  &__title {
    align-self: center;
    font-size: 4rem;
  }

  &__list {
    list-style-type: none;
    width: 70%;
    margin-top: 1.5rem;

    @include breakpoint(767) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;

      input[type="checkbox"] {
        display: none;

        &:checked~label {
          background-color: $whitish;
          color: $colour-primary;
          border: 1px solid $colour-primary;
        }
      }

      label {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        cursor: pointer;
        background-color: $colour-primary;
        color: $whitish;
        padding: 1.5rem;
        border: 1px solid transparent;
        border-radius: 1rem;
        transition: all 0.25s ease-in;

        @include breakpoint(767) {
          padding: 1rem;
        }



        span {
          font-size: 1.75rem;

          &:first-child {
            margin: 0 auto;

            @include breakpoint(767) {
              margin-right: 0.75rem;
            }
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
