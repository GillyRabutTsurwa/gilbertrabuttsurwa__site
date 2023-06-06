<script setup>
const props = defineProps({ blok: Object });
const richTextOne = computed(() => {
    return renderRichText(props.blok.paraOne);
});

const richTextTwo = computed(() => {
    return renderRichText(props.blok.paraTwo);
});

const richTextThree = computed(() => {
    return renderRichText(props.blok.paraThree);
});
</script>

<template>
    <section class="proficiency" v-editable="blok">
        <h2 class="proficiency__title">Skills</h2>
        <div class="proficiency__text">
            <p v-html="richTextOne"></p>
            <p v-html="richTextTwo"></p>
            <p v-html="richTextThree"></p>
        </div>
        <Chart />
    </section>
</template>

<style lang="scss">
@use "@/assets/sass/variables";
@use "@/assets/sass/extend";

.proficiency {
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 55% 1fr;
    grid-template-rows: min-content 1fr;
    background-color: variables.$default-grey;
    margin-top: 6rem;

    &__title {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        text-align: center;
        font-size: 5rem;
    }

    &__text {
        font-size: 2.25rem;
        margin-top: 12rem;
        margin-left: 4rem;
        margin-right: 4rem;
        line-height: 2;
        grid-column: 2 / -1;
        grid-row: 2 / -1;
        //   @include responsive(tablet-portrait) {
        //     margin: 2.5rem 0 0 2.5rem;
        //     font-size: 3rem;
        //   }
    }
}

.lang-in-bold {
    font-weight: bolder;

    &.css {
        @extend %text-gradient;
        background-image: linear-gradient(#3c99dc, #66d3fa);
    }

    &.sass {
        @extend %text-gradient;
        background-image: linear-gradient(#cd6799, #e293b9);
    }

    &.javascript {
        @extend %text-gradient;
        background-image: linear-gradient(to bottom right, #f0db4f 25%, #323330);
    }

    &.vue {
        @extend %text-gradient;
        background-image: linear-gradient(315deg, #42d392 25%, #647eff);
    }

    &.svelte {
        @extend %text-gradient;
        background-image: linear-gradient(to top right, #ff3e00 25%, #e3e7f7);
    }

    &.tailwind {
        @extend %text-gradient;
        background-image: linear-gradient(315deg, #42d392 25%, #647eff);
    }

    &.react {
        @extend %text-gradient;
        background-image: linear-gradient(to top left, #61dbfb, #333);
    }

    &.typescript {
        @extend %text-gradient;
        background-image: linear-gradient(to top right, #235a97 25%, #e3e7f7);
    }

    &.bootstrap {
        @extend %text-gradient;
        background-image: linear-gradient(315deg, #3806ad 25%, #553c7b);
    }

    &.webpack {
        @extend %text-gradient;
        background-image: linear-gradient(315deg, #1d78c1 25%, #465e69);
    }
}
</style>
