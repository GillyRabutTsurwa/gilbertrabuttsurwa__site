<script setup>
import { usePostsStore } from '@/stores/posts';

const { data: posts } = await useFetch("/api/blogs/tech");
const store = usePostsStore();

store.techPosts = posts.value;
store.filteredTechPosts = posts.value;

const props = defineProps({
    posts: {
        type: Array,
        required: true
    }
});

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
        <div v-for="(currentPost, index) in store.techPosts" :key="currentPost._id" class="blogs__item">
            <figure class="blogs__item--picture">
                <SanityImage :asset-id="currentPost.thumbnail.asset._ref" auto="format" />
            </figure>
            <div class="blogs__item--content">
                <h3 class="title">{{ currentPost.title }}</h3>
                <h5 class="published">{{ formatDate(currentPost.publishedAt) }}</h5>
                <div class="snippet">
                    <p>{{ getSnippet(currentPost.body) }}</p>
                </div>
                <Button isLink :path="`/blog/tech/posts/${currentPost.slug.current}`" colourPrimary="#104f55"
                    colourSecondary="#f0f0f0" />
            </div>
        </div>
    </section>
</template>


<style lang="scss" scoped>
@use "@/assets/sass/abstracts/" as abstracts;

h2 {
    position: relative;
    margin-top: 4rem;
    font-size: 4rem;
    left: 46%;
    bottom: 5rem;

    @include abstracts.breakpoint(480) {
        left: 37.5%;
    }
}

.blogs {
    margin: 3rem 0;
    padding: 5rem;

    display: grid;
    grid-template-columns: repeat(2, 55rem);
    grid-template-rows: repeat(2, -webkit-min-content);
    grid-template-rows: repeat(2, min-content);
    -moz-gap: 7rem;
    gap: 7rem;

    @include abstracts.breakpoint(1023) {
        grid-template-columns: 1fr;
        width: 80%;
        margin: 0 auto;
    }

    &__item {
        // height: 90rem; //TESTING

        &--picture {
            height: 50rem;

            img {
                width: 100%;
                height: 100%;
                -o-object-fit: cover;
                object-fit: cover;
            }
        }

        &--content {
            .title {
                font-size: 3rem;
                margin-top: 3rem;
            }

            .published {
                margin-bottom: 1.5rem;
                font-weight: 500;
            }

            .snippet {}
        }
    }
}
</style>