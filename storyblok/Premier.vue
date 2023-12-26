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
</script>

<template>
    <section class="columns">
        <div class="columns__box">
            <div :style="{ backgroundImage: 'linear-gradient(to bottom, #1a2934 0%, #1a2934 33%, #fefefe 33%, #fefefe 66%, #1a2934 66%, #1a2934 100%)', color: '#1a2934' }"
                class="columns__box--front">
                <h3 class="columns__title">Who I am</h3>
            </div>
            <div :style="{ backgroundColor: '#1a2934', color: '#fefefe' }" class="columns__box--back">
                <h4 class="columns__subtitle">A Bit About Me</h4>
                <p class="columns__text">
                    I am {{ age }}, Kenyan who resides in the East Coast region of the United States. I speak 3 languages:
                    english, swahili and french, with the intent of learning Spanish. I like to read french literature ―
                    among other things of course ― play football, and my playstation 2 during my freetime. I currently work
                    at Shenandoah University as web developer. My
                    favourite thing right now is my ongoing gameplay of the Ratchet & Clank PS2 series.
                </p>
            </div>
        </div>
        <div class="columns__box">
            <div :style="{ backgroundColor: '#fefefe', color: '#1a2934' }" class="columns__box--front">
                <h3 class="columns__title">What I do</h3>
            </div>
            <div :style="{ backgroundColor: '#1a2934', color: '#fefefe' }" class="columns__box--back">
                <h4 class="columns__subtitle">Fullstack Dev</h4>
                <p class="columns__text">
                    I am a full-stack developer, particularly proficient with JavaScript by using tools such as Vue, Svelte,
                    Node, Express, MongoDB / Mongoose, Nitro, and Webpack - just to name a few - to make sites and
                    applications, in addition to simple User Interfaces and templates. I am also proficient with PHP,
                    MySQL. Additionally, I am in the process of learning Linux, particularly bash scripting, as I would like
                    to learn about managing Linux servers.
                </p>
            </div>
        </div>
        <div class="columns__box">
            <div :style="{ backgroundImage: 'linear-gradient(to bottom, #1a2934 0%, #1a2934 33%, #fefefe 33%, #fefefe 66%, #1a2934 66%, #1a2934 100%)', color: '#1a2934' }"
                class="columns__box--front">
                <h3 class="columns__title">What I use</h3>
            </div>
            <div :style="{ backgroundColor: '#1a2934', color: '#fefefe' }" class="columns__box--back">
                <h4 class="columns__subtitle">My Tools</h4>
                <ul class="columns__list">
                    <li class="columns__list--item">Vue</li>
                    <li class="columns__list--item">Sass</li>
                    <li class="columns__list--item">TypeScript</li>
                    <li class="columns__list--item">Tailwind</li>
                    <li class="columns__list--item">Webpack</li>
                    <li class="columns__list--item">Sanity</li>
                    <li class="columns__list--item">Storyblok</li>
                    <li class="columns__list--item">WordPress</li>
                    <li class="columns__list--item">Nuxt</li>
                    <li class="columns__list--item">Sveltekit</li>
                    <li class="columns__list--item">Node</li>
                    <li class="columns__list--item">Express</li>
                    <li class="columns__list--item">MongoDB</li>
                    <li class="columns__list--item">MySQL</li>
                    <li class="columns__list--item">PHP</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
.columns {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    height: 100vh;

    &__box {
        position: relative;
        width: 100%;
        height: 100%;

        //TESTING
        &:nth-of-type(2):hover &--back {
            background-color: #fefefe !important;
            color: #1a2934 !important;
        }

        &:hover &--front {
            opacity: 0;
        }

        &:hover &--back {
            opacity: 1;
        }

        &--front,
        &--back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            display: -webkit-box;

            display: -ms-flexbox;

            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;

            // TESTING:
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }

        &--front {
            font-family: inherit;
            text-transform: uppercase;
            font-weight: bold;
        }

        &--back {
            opacity: 0;
            background-color: #1a2934;
            color: #fff;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            font-size: 2.5rem;

            padding: 0 2rem;
        }
    }

    &__title {
        font-size: 5rem;
    }

    &__subtitle {
        margin-bottom: 2rem;
    }

    &__text {
        padding: 0 1.5rem;
        line-height: 1.5;
    }

    &__list {
        list-style: none;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;

        &--item {
            margin: 1.25rem;
        }
    }
}
</style>
