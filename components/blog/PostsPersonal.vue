<script setup>
const props = defineProps({
  posts: {
    type: Array,
    required: true
  }
});

console.log(props.posts);

const snippetLength = computed(() => {
  return showElement.value ? 300 : 400;
});

const { formatDate } = useFormatDate();
const { showElement, toggleElementOnResize } = useBreakpoints();


function getSnippet(blockContent) {
  const body = blockContent
    .filter(block => block._type === "block")
    .map(block => block.children.map(child => child.text).join(""))
    .join('')
  return body.slice(0, snippetLength.value) + "...";
}

if (process.client) {
  window.addEventListener("resize", () => {
    toggleElementOnResize(480);
  })
};

onMounted(() => {
  if (process.client) {
    toggleElementOnResize(480);
  }
});
</script>

<template>
  <h2>Posts</h2>
  <section class="blogs">
    <div v-for="(currentPost, index) in props.posts" :key="currentPost._id" class="blogs__item">
      <figure class="blogs__item--picture">
        <SanityImage :asset-id="currentPost.thumbnail?.asset?._ref" auto="format" />
      </figure>
      <div class="blogs__item--content">
        <h3 class="title">{{ currentPost.title }}</h3>
        <h5 style="font-weight: 500;">{{ formatDate(currentPost.publishedAt) }}</h5>
        <div class="snippet">
          <p>{{ getSnippet(currentPost.body) }}</p>
        </div>
        <Button isLink :path="`/blog/personal/posts/${currentPost.slug.current}`" colourPrimary="#f0f0f0"
          colourSecondary="#104f55" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/abstracts" as abstracts;

h2 {
  position: relative;
  margin-top: 4rem;
  font-size: 4rem;
  left: 46%;

  @include abstracts.breakpoint(480) {
    left: 37.5%;
  }
}

// =====================================
.blogs {
  margin: 3rem 0;
  padding: 5rem;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(12, 5vw);
  -moz-gap: 7rem;
  gap: 2rem;

  @include abstracts.breakpoint(1023) {
    grid-template-columns: 1fr;
    grid-template-rows: unset;
    grid-auto-rows: 50rem;
    width: 80%;
    margin: 0 auto;
  }

  &.second {
    grid-template-rows: 54rem -webkit-min-content;
    grid-template-rows: 54rem min-content;
  }

  &__item {
    position: relative;

    @include abstracts.breakpoint(1023) {
      grid-column: 1 / -1 !important;
      grid-row: auto !important;
    }

    &:hover &--content {
      opacity: 1;
    }

    // TESTING:
    &:nth-child(8n + 1) {
      grid-column: 1 / 3;
      grid-row: 1 / 5;
    }

    &:nth-child(8n + 2) {
      grid-column: 3 / 5;
      grid-row: 1 / 7;
    }

    &:nth-child(8n + 3) {
      grid-column: 5 / -1;
      grid-row: 1 / 4;
    }

    &:nth-child(8n + 4) {
      grid-column: 1 / 3;
      grid-row: 5 / 10;
    }

    &:nth-child(8n + 5) {
      grid-column: 5 / -1;
      grid-row: 4 / 7;
    }

    &:nth-child(8n + 6) {
      grid-column: 3 / 6;
      grid-row: 7 / 10;
    }

    &:nth-child(8n + 7) {
      grid-column: 6 / -1;
      grid-row: 7 / -1;
    }

    &:nth-child(8n + 8) {
      grid-column: 1 / 6;
      grid-row: 10 / 13;
    }

    // @include abstracts.breakpoint(480) {
    //   grid-template-rows: 20rem repeat(4, -webkit-min-content);
    //   grid-template-rows: 20rem repeat(4, min-content);
    // }


    &--picture {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        -o-object-fit: cover;
        object-fit: cover;
      }
    }

    &--content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding-bottom: 3rem;
      background-color: rgba(0, 0, 0, 0.75);
      transition: opacity 0.5s ease-in;
      padding: 1.5rem 3rem;
      color: abstracts.$whitish;

      opacity: 0;

      .title {
        font-size: 2.5rem;
      }


      .snippet {
        margin: 1rem 0 0 0;
        font-size: 1.5rem;

        p {
          font-size: 1.65rem;
          line-height: 1.175;
          margin-bottom: 0;
        }
      }

      // NOTE: nuxt link button component
      a {
        margin: 2rem auto 0 auto;
      }
    }
  }
}
</style>
