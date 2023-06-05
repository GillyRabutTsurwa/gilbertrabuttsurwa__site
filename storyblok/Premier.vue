<script setup>
const currentDate = new Date();
const birthday = new Date("1996-05-09"); //NOTE: american format is Javascript's default
// thanks to this link: https://stackoverflow.com/questions/10008050/get-age-from-birthdate
const age = Math.floor((currentDate - birthday) / 31557600000);

let photoIndex = 0;

const props = defineProps({ blok: Object });
console.log(props.blok);

const richText = computed(() => {
    return renderRichText(props.blok.paraOne);
})

onMounted(() => {
    console.log(richText.value)
})

// 
</script>

<template>
    <section class="intro" v-editable="blok">
        <h2 class="intro__title">Introduction</h2>
        <p class="intro__paragraph" v-html="richText">
        </p>
        <p class="intro__paragraph">
            Currently a web developer at, <a href="https://su.edu/" target="_blank" rel="noopener noreferrer"
                class="link__job">Shenandoah University</a>,
            whilst doing a bit of freelancing on the side. I specialise in front-end web development, particularly with
            Vanilla Javascript and the Vue
            framework. I am steady learner, attentive, and harbour a good set of researching skills that
            help me quickly pick up new
            technologies. I also harbour some knowledge in back-end development. particularly with NodeJS, MongoDB and
            Express. I decided to learn them,
            to some degree, in order to be able to use them to interact with some of my favourite APIs upon making
            full-stack applications. Such as my <a href="https://gilbertrabuttsurwa-shop.netlify.app/" target="_blank"
                rel="noopener noreferrer" class="link__blog">shop</a>, that I built with Node, Express and Sanity IO. The
            Chart below shows my competence (comfort) levels with certain front-end
            development tools. These are
            also, more or less, the main technologies that will be the makeup of my entire skillset.
        </p>
    </section>
</template>

<style lang="scss">
.intro {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: min-content 1fr;
    column-gap: 13rem;
    background-color: rgb(238, 238, 238);
    margin-top: 5rem;

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
