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
    <section class="proficiency landing" v-editable="blok">
        <h2 class="proficiency__title">Skills</h2>
        <Chart />
    </section>
</template>

<style lang="scss">
.proficiency {
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content 100dvh;
    background-color: $default-grey;
    margin-top: 6rem;

    @include breakpoint(1023) {
        grid-template-columns: 1fr;
        // grid-template-rows: unset;
        // grid-auto-rows: max-content;
        order: 4; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
    }

    &__title {
        grid-column: 1 / -1;
        grid-row: 1 / 2;
        text-align: center;
        font-size: 5rem;

        @include breakpoint(1023) {
            grid-column: 1 / 3;
            // grid-row: 1 / 2;
            justify-self: center;
        }
    }

    // &__text {
    //     font-size: 2.25rem;
    //     margin-top: 12rem;
    //     margin-left: 4rem;
    //     margin-right: 4rem;
    //     line-height: 2;
    //     grid-column: 2 / -1;
    //     grid-row: 2 / -1;

    //     @include breakpoint(1023) {
    //         margin-top: 0;
    //         margin-left: 0;
    //         font-size: 1.75rem;
    //         grid-row: 2 / 3;
    //     }
    // }
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
