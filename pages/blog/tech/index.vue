<script setup lang="ts">
import groq from 'groq';
import { usePostsStore } from '@/stores/posts';

interface Page {
  currentPage: number;
  postsPerPage: number;
}

// VARIABLES
const postsQuery: string = groq`*[_type == "post" && postGenre == "tech"]`;
const isColoured: Ref<boolean> = ref(true);
const flexDir: Ref<string> = ref("");
const iconNames: Ref<string[]> = ref(["html5", "css3", "sass", "codepen", "tailwindcss", "javascript", "typescript", "jquery", "vuejs", "nuxtjs", "svelte", "react", "gulp", "markdown", "git", "github", "php", "jest", "linux"]);
const state: Page = reactive({
  currentPage: 1,
  postsPerPage: 8
});

// COMPOSABLES
const route = useRoute();
const store = usePostsStore();
const { formatDate } = useFormatDate();
const { showElement, toggleElementOnResize } = useBreakpoints();
const { data: posts } = await useSanityQuery(postsQuery);

// COMPUTED VALUES
const colouredOrBW: ComputedRef<string> = computed(() => {
  return isColoured.value === true ? "plain colored" : "plain";
});

const snippetLength: ComputedRef<number> = computed(() => {
  return showElement.value ? 300 : 400;
});

// NOTE: pagination for code
const indexOfLastPost: ComputedRef<number> = computed(() => {
  return state.currentPage * state.postsPerPage;
});

const indexOfFirstPost: ComputedRef<number> = computed(() => {
  return indexOfLastPost.value - state.postsPerPage;
});

const currentPosts = computed(() => {
  return store.filteredPosts.slice(indexOfFirstPost.value, indexOfLastPost.value);
});
// =========================

// FUNCTIONS
function setIconName(iconName: string): string {
  return `devicon-${iconName}-${colouredOrBW.value}`;
};

function getSnippet(blockContent) {
  const body = blockContent
    .filter(block => block._type === "block")
    .map(block => block.children.map(child => child.text).join(""))
    .join('')
  return body.slice(0, snippetLength.value) + "...";
}

function renderPagination(eventPayload: number) {
  state.currentPage = eventPayload;
  console.log(eventPayload);
}

// CODE TO RUN ON COMPONENT CREATION
store.techPosts = posts.value;
store.filteredTechPosts = posts.value;
if (process.client) window.addEventListener("resize", () => (toggleElementOnResize(767)));

// LIFECYCLE HOOKS
onMounted(() => {
  if (process.client) {
    toggleElementOnResize(767);
    const mediaQueryList = window.matchMedia("(max-width: 1023px)");
    console.log(mediaQueryList);
    flexDir.value = mediaQueryList.matches ? "column" : "row";
  }
});
</script>

<template>
  <Navigation />
  <div>
    <DevOnly>
      <div class="marquee-container" v-if="!showElement">
        <Vue3Marquee :pauseOnHover="true">
          <i v-for="(currentIconName, index) in iconNames" :key="index" :class="setIconName(currentIconName)"
            class="word"></i>
        </Vue3Marquee>
      </div>
    </DevOnly>
    <FlexContainer :layout="flexDir">
      <Main>
        <template v-slot:post-list>
          <Posts type="tech" :posts="store.techPosts" />
        </template>
        <template v-slot:pagination>
          <Pagination :postsPerPage="state.postsPerPage" :postsLength="store.filteredTechPosts.length"
            @paginate="renderPagination($event)" />
        </template>
      </Main>
      <Aside />
    </FlexContainer>
  </div>
</template>


<style lang="scss" scoped>
.about {
  /* NOTE: or make width: 100% or 100vw (or at least 90) and remove margin: auto. see what looks better */
  width: 80vw;
  height: 100%;
  margin: auto;
  position: relative;

  @include breakpoint(767) {
    padding: 0;
    margin: 0;
    text-align: center;
    width: 100%;
  }
}

.about__title {
  padding: 7rem 0 3rem 0;
  text-align: center;
  font-size: 4rem;
}

.about__text {
  width: 80%;
  margin: 0 auto;
  font-size: 2rem;
  line-height: 2;

  // @include breakpoint(767) {
  //   font-size: 1rem;
  // }
}

.marquee-container {
  height: 7.5rem;
  margin: 4rem 0;
}

/* = */
.word {
  font-size: 60px;
  margin: 0 25px;
}

.odd {
  color: rgb(68, 77, 84);
}

.even {
  color: rgb(137, 147, 156);
}

/* = */


.about__links {
  display: flex;
  justify-content: space-around;

  @include breakpoint(1023) {
    flex-wrap: wrap;
    margin: 0 0 6rem 0;
  }

  @include breakpoint(767) {
    flex-direction: column;
    width: 80%;
    margin: 1rem auto 4rem auto;
  }
}

.about__links a,
.about__links:link,
.about__links:visited {
  display: inline-block;
  border: 2px solid #1a2934;
  border-radius: 1rem;
  font-size: 1.6rem;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  padding: 1.25rem 3rem;
  margin-top: 3rem;
  background-color: #1a2934;
  cursor: pointer;
  z-index: 10000;

  @include breakpoint(1023) {
    font-size: 1.25rem;
    padding: 1.25rem 2.5rem;
  }
}

.about__links a:hover,
.about__links a:active {
  background-color: #fff;
  color: #1a2934;
}

/* .vue3-marquee:first-of-type {
  top: 0;
  left: 50%;
} */

/* .vue3-marquee:nth-of-type(2) {
  left: 50%;
  top: 0;
  transform: rotate(90deg);
  width: 95vw;
} */

/* .vue3-marquee:nth-of-type(3) {
  
  top: 0;
} */

/* .vue3-marquee:last-of-type {
  right: 50%;
  top: 0;
  transform: rotate(90deg);
  width: 95vw;
} */
.hide {
  display: none;
  visibility: hidden;
}



// NEW
// .picture-category {
//   margin: 3rem 0;
//   padding: 5rem;

//   display: grid;
//   grid-template-columns: repeat(2, 55rem);
//   // grid-template-columns: 1fr; will be great for responsiveness
//   -moz-gap: 7rem;
//   gap: 7rem;
//   grid-template-rows: repeat(2, -webkit-min-content);
//   grid-template-rows: repeat(2, min-content);

//   @include breakpoint(1023) {
//     grid-template-columns: 1fr;
//     width: 80%;
//     margin: 0 auto;
//   }

//   &.second {
//     grid-template-rows: 54rem -webkit-min-content;
//     grid-template-rows: 54rem min-content;
//   }

//   &__picture {
//     // WORKS....
//     -o-object-fit: cover;
//     object-fit: cover;

//     img {
//       // LIKE GOD!
//       width: 100%;
//       height: 100%;
//     }
//   }

//   &__category {
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start;
//     align-items: center;
//     margin-bottom: 4rem;
//     width: 100%; //TESTING

//     &--title {
//       align-self: center;
//     }

//     &--list {
//       list-style-type: none;
//       width: 70%;
//       margin-top: 1.5rem;

//       li {
//         margin-bottom: 2rem;
//         background-color: $colour-primary;
//         color: $whitish;
//         font-weight: bold;
//         padding: 1.1rem 1.5rem;
//         border-radius: 1rem;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         cursor: pointer;
//       }
//     }
//   }

//   &__caption {
//     // display: flex;
//     // flex-direction: column;
//     // justify-content: space-between;
//     // // align-items: flex-start;
//     // align-items: flex-start;
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 35rem repeat(4, -webkit-min-content);
//     grid-template-rows: 35rem repeat(4, min-content);
//     -moz-row-gap: 1.25rem;
//     row-gap: 1.25rem;
//     justify-items: start;

//     @include breakpoint(480) {
//       grid-template-rows: 20rem repeat(4, -webkit-min-content);
//       grid-template-rows: 20rem repeat(4, min-content);
//     }

//     &--paragraph {
//       margin-bottom: 0;
//     }
//   }

//   &__popular-post {
//     display: grid;
//     // grid-template-rows: -webkit-min-content 5rem -webkit-min-content;
//     // grid-template-rows: -webkit-min-content 50rem -webkit-min-content;
//     grid-template-rows: -webkit-min-content 20rem -webkit-min-content;
//     grid-template-rows: min-content 20rem min-content;

//     &--thumbnail {
//       -o-object-fit: cover;
//       object-fit: cover;

//       img {
//         width: 100%;
//         height: 100%;
//       }
//     }

//     &--paragraph {
//       font-size: 1.4rem;
//     }
//   }
// }</style>