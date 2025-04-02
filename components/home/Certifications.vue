<script setup lang="ts">
import type { Post } from '~/interfaces/post';


const { formatDate } = useFormatDate();

const props = defineProps({
  blogs: {
    type: Array as PropType<Post[] | null>,
    required: true
  }
});
console.log(props.blogs);

const hoveredIndex = ref<number | null>(null)
const logos = ref<string[]>(["storybook", "react", "archlinux", "ansible", "mysql", "docker"]);

const handleMouseover: (argument: MouseEvent) => void = (e: MouseEvent) => {
  const listElement = e.target?.closest("li");
  if (listElement) {
    const listIndex = parseInt(listElement.getAttribute("list-index")); // this doesn't give us a number outright. i need to parseInt()
    hoveredIndex.value = listIndex;
    console.log(hoveredIndex.value)
  }
  console.log("Souris Enter")
}

const handleMouseLeave = () => hoveredIndex.value = null;

const capitalise: (argument: string) => string = (word: string): string => {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`
}
</script>

<template>
  <section class="credentials landing">
    <h2 class="credentials__main-title">My Blogs</h2>
    <ul class="credentials__list blogs">
      <li v-for="currentBlog in props.blogs" :key="currentBlog._id" class="credentials__list--item">
        <NuxtLink :to="`/blog/${currentBlog.postGenre}/${currentBlog.slug.current}`" target="_blank" class="blog">
          <h2 class="blog__title">{{ currentBlog.title }}</h2>
          <p>{{ formatDate(currentBlog.publishedAt) }}</p>
          <p>
            <span>Genre:</span>
            <span>&nbsp;</span>
            <span>{{ capitalise(currentBlog.postGenre) }}</span>
          </p>
          <p>
            <span>Categories:</span>
            <span>&nbsp;</span>
            <span v-for="(currentCategory, index) in currentBlog.categories" :key="index">
              {{ currentCategory }}
            </span>
          </p>
        </NuxtLink>
      </li>
    </ul>
    <h2 class="credentials__main-title">
      <span>Learning</span>
      <span class="dot dot-one">.</span>
      <span class="dot dot-two">.</span>
      <span class="dot dot-three">.</span>
    </h2>
    <div style="text-align: center; margin-bottom: 4rem;">
      <ul @mouseover="handleMouseover($event)" @mouseleave="handleMouseLeave" class="credentials__list learning">
        <li v-for="(currentLogo, index) in logos" :key="index" :list-index="index" class="credentials__list--item">
          <i :class="[`devicon-${currentLogo}-plain`, `${hoveredIndex === index ? 'colored' : ''}`]" />
          <span>&nbsp;</span>
          <span>{{ currentLogo === "mysql" ? "MySQL" : capitalise(currentLogo) }}</span>
        </li>
      </ul>
    </div>
    <h2 class="credentials__main-title">
      <span>Spotify Player Coming Soon</span>
      <span>&nbsp;</span>
      <i class="fab fa-spotify"></i>
      <!-- <span class="dot dot-one">.</span>
      <span class="dot dot-two">.</span>
      <span class="dot dot-three">.</span> -->
    </h2>
  </section>
</template>

<style lang="scss" scoped>
.credentials {
  padding: 6rem 0;
  color: $colour-primary;

  @include breakpoint(1023) {
    order: 5; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
  }



  &__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;

    @include breakpoint(1023) {
      flex-direction: column-reverse;
    }
  }

  &__main-title {
    text-align: center;
    font-size: 5rem;
    margin-bottom: 3rem;
  }



  // NOTE: moved code below to LearningList.svelte
  &__list {
    list-style-type: none;
    font-size: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    // @include breakpoint(1023) {
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: space-around;
    // }

    &--item {
      margin-bottom: 5rem;
    }

    &.blogs {
      margin-inline: 6rem;

    //NOTE: je pourrais aussi le mettre dans &--item {}, mais à cause du nom, j'ai décidé de le mettre ici
      .blog {
        display: inline-block;
        padding: 2rem;
        outline: 2px solid $colour-primary;
        text-decoration: none;
        text-align: center;
        transition: all 0.5s ease;
        
        &:link,
        &:visited {
          background-color: $colour-primary;
          color: $colour-secondary;
        }

        &:hover,
        &:active {
          background-color: $colour-secondary;
          color: $colour-primary;
        }

        &__title {
          font-size: 4.5rem;
        }
      }

      @include breakpoint(1023) {
        margin-left: 3rem;
      }
    }

    &.learning {
      display: flex;
      justify-content: space-around;
      height: 100%;

      @include breakpoint(1023) {
        flex-wrap: wrap;
        justify-content: space-around;
      }

      @include breakpoint(767) {
        flex-flow: row wrap;
      }

      li {
        margin-bottom: 0;
        font-size: 5rem;

        @include breakpoint(767) {
          margin-bottom: 1.5rem;
        }
      }
    }
  }
}

.dot {
  animation: ellipsisFade 1.5s ease infinite;

  &-one {
    animation-delay: 0.1s;
  }

  &-two {
    animation-delay: 0.2s;
  }

  &-three {
    animation-delay: 0.3s;
  }
}
</style>
