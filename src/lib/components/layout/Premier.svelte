<script>
    import { onMount } from "svelte";

    // easy logic for dynamic age in markup
    const currentDate = new Date();
    const birthday = new Date("1996-05-09"); //NOTE: american format is Javascript's default
    // @ts-ignore: no actual error code works fine:
    // thanks to this link: https://stackoverflow.com/questions/10008050/get-age-from-birthdate
    $: age = Math.floor((currentDate - birthday) / 31557600000);

    let photoIndex = 0;

    onMount(() => {
        setInterval(() => {
            if (photoIndex >= 2) photoIndex = 0;
            photoIndex++;
        }, 5000);
    });
</script>

<section class="intro">
    <h2 class="intro__title">Introduction</h2>
    <p class="intro__paragraph">
        I am a {age} years young front-end developer from Nairobi Kenya who currently resides in the United States. I never thought nor dreamed that I
        would ever be a web developer, much less have any affinity or interest in code. But after my 1st ever computer science course in 2017, which was
        a Java course, I continued on (even though I never became a programmer afterwards). I shortly took a HTML course shortly after, things more than
        less stuck well and I eventually became a web developer. In my freetime, I work on my side projects, read, play football, play video-games and
        go on long drives to cool places, lakes, countrysides, national parks, etc. I also have a very active
        <a href="https://gilbertrabuttsurwa.blog" target="_blank" rel="noopener noreferrer" class="link__blog">blog</a> that I released very recently.
        All things said, it is a privilege to do what I do, and this is a career path — though it proved to be more than that — I am glad I stumbled upon.
    </p>
    <p class="intro__paragraph">
        Currently a web developer at, <a href="https://su.edu/" target="_blank" rel="noopener noreferrer" class="link__job">Shenandoah University</a>,
        whilst doing a bit of freelancing on the side. I specialise in front-end web development, particularly with Vanilla Javascript and the Vue
        framework. Additionally, I am learning React and SvelteKit as it is important and advantageous to be comfortable with different libraries,
        frameworks, languages etc. I am steady learner, attentive, and harbour a good set of researching skills that help me quickly pick up new
        technologies. I also harbour some knowledge in back-end development. particularly with NodeJS, MongoDB and Express. I decided to learn them,
        to some degree, in order to be able to use them to interact with some of my favourite APIs upon making full-stack applications, with two of my
        favourites being Spotify and Stripe. The Chart below shows my competence (comfort) levels with certain front-end development tools. These are
        also, more or less, the main technologies that will be the makeup of my entire skillset.
    </p>
</section>

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
