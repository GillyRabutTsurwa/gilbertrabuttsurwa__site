<script setup>
const currentDate = new Date();
const birthday = new Date("1996-05-09"); //NOTE: american format is Javascript's default
// thanks to this link: https://stackoverflow.com/questions/10008050/get-age-from-birthdate
const age = Math.floor((currentDate - birthday) / 31557600000);

let photoIndex = 0;

const props = defineProps({ blok: Object });
console.log(props.blok);

const richTextOne = computed(() => {
    return renderRichText(props.blok.paraOne);
})

const richTextTwo = computed(() => {
    return renderRichText(props.blok.paraTwo);
})

onMounted(() => {
    console.log(richTextOne.value)
})

// 
</script>

<template>
    <section class="intro" v-editable="blok">
        <h2 class="intro__title">Introduction</h2>
        <p class="intro__paragraph" v-html="richTextOne"></p>
        <p class="intro__paragraph" v-html="richTextTwo"></p>
    </section>
</template>

<style lang="scss">
@use "@/assets/sass/mixins";

.intro {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content 1fr;
    column-gap: 13rem;
    background-color: rgb(238, 238, 238);
    margin-top: 5rem;

    @include mixins.breakpoint(1023) {
        grid-template-columns: 1fr;
        order: 2; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
    }

    &__title {
        grid-column: 1 / -1;
        font-size: 5rem;
        text-align: center;
        margin-bottom: 3rem;
    }

    &__paragraph {
        font-size: 2.25rem;
        line-height: 2;
        align-self: center;
        padding: 0 5rem;

        @include mixins.breakpoint(1023) {
            font-size: 1.75rem;
        }
    }

    & .icon {
        align-self: center;
    }
}

// @todo - modify styles and move all this code dessous
.link__blog {
    font-weight: bold;
    text-decoration: none;
    color: currentColor;
}

.link__job {
    position: relative;
    display: inline-block;

    &:link,
    &:visited {
        text-decoration: none;
        font-weight: bold;
        color: transparent;
        background-image: linear-gradient(to right, #002e62, #980630);
        -webkit-background-clip: text;
        background-clip: text;
        font-style: normal;
    }

    &::before {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        width: 100%;
        border-bottom: 3px solid currentColor;
        transform: scaleX(0);
        transition: transform 0.25s ease-in-out;
        transform-origin: 0% 50%;
    }

    &:hover,
    &:active {

        // font-style: italic; for now
        &:before {
            transform: scaleX(1);
        }
    }
}

.arrow {
    font-size: 5rem;
    text-align: center;
    margin: 1.5rem;
    transform: rotate(-50deg);

    a {

        &:link,
        &:visited {
            text-decoration: none;
            color: currentColor;
        }
    }
}
</style>
