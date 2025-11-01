<script setup lang="ts">
import type { PostInt } from '~~/interfaces/post';
const props = defineProps({
  post: {
    type: Object as PropType<PostInt | null>,
    required: true
  }
});

const { formatDate } = useFormatDate();

/** NOTE:
 * you can also import the component manually, but with this is cleaner Nuxt solution
 * if I was using plain Vue, I would have imported it instead
 * more on resolveComponent helper function here: https://vuejs.org/api/render-function.html#resolvecomponent
 */
const CustomText = resolveComponent("CustomText");
const CustomLink = resolveComponent("CustomLink");
const CustomCode = resolveComponent("CustomCode");
const CustomImage = resolveComponent("CustomImage");
const serializers = {
  types: {
    text: CustomText,
    link: CustomLink,
    code: CustomCode,
    image: CustomImage
  }
}
</script>

<template>
  <article v-if="props.post" class="blog-container">
    <figure class="blog-img-container">
      <SanityImage :asset-id="props.post.mainImage?.asset?._ref" auto="format" />
    </figure>

    <div class="blog-content">
      <Button isLink path="/blog/personal" text="All Posts" colourPrimary="#101d2c" colourSecondary="#e6b376" />
      <h1 class="blog-content__title">{{ props.post.title }}</h1>
      <h3 class="blog-content__author">
        <span>By: </span>
        <NuxtLink :to="`/blog/authours/${props.post.author.slug.current}`">
          <span>{{ props.post.author.name }}</span>
        </NuxtLink>
      </h3>
      <h3 class="blog-content__date-published">
        <span>Date Published: </span>
        <span>{{ formatDate(props.post.publishedAt) }}</span>
      </h3>
      <ul class="blog-content__categories">
        <li class="blog-content__categories--title">Categories: </li>
        <li v-for="currentCategory in props.post.categories" class="blog-content__categories--category">
          {{ currentCategory }}
        </li>
      </ul>
      <div class="blog-content__description">
        <p>{{ props.post.excerpt }}</p>
        <SanityContent :blocks="props.post.body" :serializers="serializers" />
      </div>
      <Button isLink path="/blog/personal" text="All Posts" colourPrimary="#101d2c" colourSecondary="#e6b376" />
    </div>
  </article>
</template>

<style lang="scss">
.blog-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  height: 100vh;
  overflow: hidden;

  @include breakpoint(1023) {
    grid-template-columns: 1fr;
    grid-template-rows: 35% 1fr;
    min-height: 100vh;
  }

  @include breakpoint(480) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }

  .blog-img-container {
    position: sticky;
    top: 0;
    height: 100vh;
    overflow: hidden;

    @include breakpoint(1023) {
      position: relative;
      grid-row: 1 / 2;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      -o-object-fit: cover;
      object-fit: cover;
    }
  }

  .blog-content {
    position: relative;
    padding: 4rem 3rem 2rem 3rem;
    overflow: hidden auto;
    height: 100vh;
    color: $colour-primary;

    @include breakpoint(1023) {
      grid-row: 2 / 3;
      height: auto;
    }

    &__title,
    &__author,
    &__date-published {
      @include breakpoint(480) {
        text-align: center;
      }
    }

    &__title {
      font-weight: bolder;
      font-size: 5rem;
      margin: 4.5rem 0 1rem 0;
    }

    &__author,
    &__date-published {
      font-style: italic;
      font-weight: normal;
    }

    &__author {
      a,
      a:link,
      a:visited {
        color: $colour-primary;
        text-decoration: underline;
      }
    }

    &__description {
      font-size: 1.75rem;
      margin: 3rem 0;
      line-height: 1.5;
      color: #333;
    }

    &__categories {
      display: flex;
      margin-top: 1.5rem;
      list-style-type: none;
      font-size: 1.75rem;

      &--title {
        margin-right: 1rem;
      }

      &--category {
        margin-right: 0.75rem;

        // NOTE: mettre une virgule sur chaque categorie sauf la derniere
        &:not(:last-of-type) {
          &::after {
            content: ",";
          }
        }
      }
    }
  }
}
</style>