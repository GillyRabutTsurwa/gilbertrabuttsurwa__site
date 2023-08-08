<script>
</script>

<template>
    <section class="proficiency">
        <h2 class="proficiency__title">Skills</h2>
        <div class="proficiency__text">
            <p>
                I am adept in some technologies whereas I am still learning others. My strong points include: <span
                    class="lang-in-bold"><span class="css">CSS</span>/<span class="sass">Sass</span></span>, <span
                    class="lang-in-bold javascript">JavaScript</span>, <span class="lang-in-bold vue">VueJS</span>, and
                <span class="lang-in-bold svelte">Svelte</span>. I am also gradually improving my skills with:
                <span class="lang-in-bold react">React</span>,
                <span class="lang-in-bold typescript">TypeScript</span>, and <span
                    class="lang-in-bold webpack">Webpack</span>.
            </p>
            <p>
                I also have adequate experience using css frameworks, such as <span
                    class="lang-in-bold bootstrap">Bootstrap</span> and
                <span class="lang-in-bold tailwind">Tailwind</span> (which is my preferred one). I also have adept skills
                with GulpJS and Git for front-end
                workflow and version control respectively, which, along with all the other technologies I've learnt, have
                given me the skills to make cool
                projects. Even though there will be much to learn in the future, these aforementioned tools and technologies
                are the ones that I will be currently
                focusing on. As the web dev world changes, I will adapt accordingly, as this is one of the most important
                attributes of a good developer.
            </p>
            <p>
                Looking beyond the scope of coding — but could still be somewhat pertinent —, I possess very good research,
                writing, and problem-solving
                skills. I take my work seriously, with the purpose of producing good work that <em>I</em>, primarily, will
                be pleased with.
            </p>
        </div>
        <Chart />
    </section>
</template>

<style lang="scss">
.proficiency {
    display: grid;
    // grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 55% 1fr;
    grid-template-rows: min-content 1fr;
    background-color: $default-grey;
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

    .css {
        @extend %text-gradient;
        background-image: linear-gradient(#3c99dc, #66d3fa);
    }

    .sass {
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
