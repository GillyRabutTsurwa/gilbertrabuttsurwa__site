<script setup>
const props = defineProps({
  postData: {
    type: Object,
    required: true
  }
});
const { title, body, author, publishedAt, mainImage: imgURL } = props.postData;
const { formatDate } = useFormatDate();

/** NOTE:
 * you can also import the component manually, but with this is cleaner Nuxt solution
 * if I was using plain Vue, I would have imported it instead
 * more on resolveComponent helper function here: https://vuejs.org/api/render-function.html#resolvecomponent
 */
const CustomText = resolveComponent("CustomText");
const CustomLink = resolveComponent("CustomLink");
const CustomCode = resolveComponent("CustomCode");
const serializers = {
  types: {
    text: CustomText,
    link: CustomLink, //NOTE: it works
    code: CustomCode
  }
}

const { showElement, toggleElementOnResize } = useBreakpoints();
if (process.client) window.addEventListener("resize", () => (toggleElementOnResize(480)));
onMounted(() => {
  if (process.client) toggleElementOnResize(480);
});
</script>

<template>
  <article class="blog-container">
    <figure class="blog-img-container" v-if="!showElement">
      <SanityImage :asset-id="imgURL?.asset?._ref" auto="format" />
    </figure>

    <div class="blog-content">
      <Button isLink path="/blog/personal/posts/" text="All Posts" colourPrimary="#104f55" colourSecondary="#f0f0f0" />
      <h1 class="blog-content__title">{{ title }}</h1>
      <h3 class="blog-content__author">
        <span>By: </span>
        <NuxtLink :to="`/authours/${author.slug.current}`">
          <span>{{ author.name }}</span>
        </NuxtLink>
      </h3>
      <h3 class="blog-content__date-published">
        <span>Date Published: </span>
        <span>{{ formatDate(publishedAt) }}</span>
      </h3>
      <div class="blog-content__description">
        <SanityContent :blocks="body" :serializers="serializers" />
      </div>
      <Button isLink path="/personal/posts/" text="All Posts" colourPrimary="#104f55" colourSecondary="#f0f0f0" />
    </div>
  </article>
</template>

<style lang="scss">
.blog-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  height: 100vh;

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
    overflow: hidden scroll;

    @include breakpoint(1023) {
      grid-row: 2 / 3;
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
      color: #888;
      font-weight: normal;
    }

    &__author {

      a,
      a:link,
      a:visited {
        color: currentColor;
        text-decoration: underline;
      }
    }

    &__description {
      font-size: 1.75rem;
      margin: 3rem 0;
      line-height: 1.5;
      color: #333;
    }
  }
}
</style>