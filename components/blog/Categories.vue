<script setup lang="ts">
import type { StateTree, Store } from "pinia";
import type { PostInt } from '~/interfaces/post';
import { usePostsStore } from '@/stores/posts';

const store: Store<"posts", StateTree> = usePostsStore();
const props = defineProps({
  posts: {
    type: Array,
    required: true
  },
});

const state = reactive({
  currentPosts: []
})

const populatePosts = () => {
  store.posts = props.posts;
  store.filteredPosts = props.posts;
}

const categories: string[][] = store.posts.map((currentPost: PostInt) => currentPost.categories);
const categoriesList: ComputedRef<string[]> = computed(() => {
  return [...new Set(categories.flat())].filter((currentValue) => currentValue !== undefined);
});

function getNumOfPostsByCategory(category: string): number {
  return store.posts.filter((currentPost: PostInt) => currentPost.categories.includes(category)).length;
}

watch(() => state.currentPosts, (newValue: Array<string>, _) => {
  store.filteredPosts = store.posts.filter((currentPost: PostInt) => {
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
    <ul class="category__list">
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
  align-self: start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 4rem 0 0 0;
  width: 100%;

  @include breakpoint(767) {
    margin-bottom: 0;
  }

  &__title {
    align-self: center;
    font-size: 4rem;
  }

  &__list {
    list-style-type: none;
    width: 50%;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    // margin-right: 5rem;
    margin-bottom: 2rem;

    @include breakpoint(767) {
      width: 100%;
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
          background-color: $colour-secondary;
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
        color: $colour-secondary;
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
            margin-right: 0.5rem;

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
