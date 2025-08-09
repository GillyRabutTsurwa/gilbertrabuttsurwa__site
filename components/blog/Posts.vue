<script setup lang="ts">
import type { PostInt } from "~/interfaces/post";
const props = defineProps({
    type: {
        type: String,
        required: false
    },
    posts: {
        type: Array<PostInt>,
        required: true
    }
});


const { formatDate } = useFormatDate();
const getSnippet = (text: string, limit: number = 300) => text.slice(0, limit) + "...";
</script>

<template>
    <section v-if="type === 'personal'" class="blogs-personal">
        <div v-for="currentPost in props.posts" :key="currentPost._id" class="blogs-personal__item">
            <figure class="blogs-personal__item--picture">
                <SanityImage :asset-id="currentPost.thumbnail?.asset?._ref" auto="format" />
            </figure>
            <div class="blogs-personal__item--content">
                <h3 class="title">{{ currentPost.title }}</h3>
                <h5 style="font-weight: 500; margin-bottom: 1rem;">{{ formatDate(currentPost.publishedAt) }}</h5>
                <div class="snippet">
                    <p>{{ getSnippet(currentPost.excerpt) }}</p>
                </div>
                <Button isLink :path="`/blog/personal/${currentPost.slug.current}`"
                    :colourPrimary="currentPost.colourPrimary.hex" :colourSecondary="currentPost.colourSecondary.hex" />
            </div>
        </div>
    </section>
    <section v-else-if="type === 'tech'" class="blogs-tech">
        <div v-for="currentPost in props.posts" :key="currentPost._id" class="blogs-tech__item">
            <figure class="blogs-tech__item--picture">
                <SanityImage :asset-id="currentPost.thumbnail.asset._ref" auto="format" />
            </figure>
            <div class="blogs-tech__item--content">
                <h3 class="title">{{ currentPost.title }}</h3>
                <h5 class="published">{{ formatDate(currentPost.publishedAt) }}</h5>
                <p class="snippet">{{ getSnippet(currentPost.excerpt) }}</p>
                <Button isLink :path="`/blog/tech/${currentPost.slug.current}`" colourPrimary="#104f55"
                    colourSecondary="#f0f0f0" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
// ===================== Personal Blog Styles ==========================
.blogs-personal {
    margin: 3rem 0;
    padding: 0 5rem 5rem 5rem;

    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(12, 5vw);
    -moz-gap: 7rem;
    gap: 2rem;

    @include breakpoint(1023) {
        grid-template-columns: 1fr;
        grid-template-rows: unset;
        grid-auto-rows: 50rem;
        width: 80%;
        margin: 0 auto;
    }

    @include breakpoint(767) {
        // grid-template-columns: unset;
        // grid-auto-rows: unset;
        display: flex;
        flex-basis: 50rem;
        overflow-x: auto;
    }

    &.second {
        grid-template-rows: 54rem -webkit-min-content;
        grid-template-rows: 54rem min-content;
    }

    &__item {
        position: relative;

        @include breakpoint(1023) {
            grid-column: 1 / -1 !important;
            grid-row: auto !important;
        }

        @include breakpoint(767) {
            flex: 0 0 40rem;
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

            //NOTE: rendre le texte plus large dans le boite plus large vers le dessous
            p {
                font-size: 2.5rem !important;
            }
        }

        // @include breakpoint(480) {
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
            color: $whitish;

            opacity: 0;

            .title {
                font-size: 3rem;
                color: $whitish;
                font-weight: 700;
            }


            .snippet {
                margin: 1rem 0 0 0;
                font-size: 1.75rem;
                line-height: 1.175;
                margin-bottom: 0;
            }

            // NOTE: nuxt link button component
            a {
                margin: 2rem auto 0 auto;
            }
        }
    }
}

// ===================== Tech Blog Styles ==========================
.blogs-tech {
    margin: 3rem 0;
    padding: 5rem;

    display: grid;
    grid-template-columns: repeat(2, 55rem);
    grid-template-rows: repeat(2, -webkit-min-content);
    grid-template-rows: repeat(2, min-content);
    -moz-gap: 7rem;
    gap: 7rem;

    @include breakpoint(1023) {
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
