<script>
  import { onMount } from "svelte";
  import imageOne from "$lib/images/autoportrait-croquis.png";
  import imageTwo from "$lib/images/autoportrait-croquis-2.png";
  import imageThree from "$lib/images/moi-high-top.png";
  import Devicon from "$lib/components/shared/Devicon.svelte";

  const myPhotos = [imageOne, imageTwo, imageThree, imageTwo];
  let currentIndex = 0;

  let imageContainer;
  let photoIndex = 0;

  onMount(() => {
    setInterval(() => { 
      if (photoIndex >= 2) photoIndex = 0;
      photoIndex++;
     }, 5000);
  })
</script>

<section class="intro-n-autoportrait">
  <div class="intro">
    <h2 class="intro__title">Introduction</h2>
    <p class="intro__paragraph">
      Currently a web developer at, <a href="https://su.edu/" target="_blank" rel="noopener noreferrer" class="link__job">Shenandoah University</a>. I
      specialise in front-end web development, particularly with Vanilla Javascript and the Vue framework. Additionally, I am learning React and
      SvelteKit as it is important and advantageous to be comfortable with different libraries, frameworks, languages etc. I am steady learner,
      attentive, and harbour a good set of researching skills that help me quickly pick up new technologies.
    </p>
    <p class="intro__paragraph deuxieme">
      Although making front-end development is my specialisation, I am also starting to delve into back-end development. particularly: NodeJS, MongoDB
      and the Express framework. Although I have a bit of experience using all three, I am learning them more intently with the aim of comfortably
      using them to make some full stack applications.
    </p>
    <p class="intro__paragraph deuxieme">
      Yes, I do have a life outside coding. To find out what I do when I'm not coding or designing, checkout the slider below.
    </p>
    <p class="arrow">
      <a href="#slider">&darr;</a>
    </p>
  </div>
  <div class="icon">
    <Devicon/>
  </div>
  <!-- NOTE: bind:this={uninitialisedVariable} is how to get the DOM element in svelte  -->
  <figure class="autoportrait" bind:this={imageContainer}>
    {#each myPhotos as currentPhoto, index}
      <img src={currentPhoto} alt="Croquis de moi" class="autoportrait-img" class:opaque="{index === photoIndex}" />
      {/each}
  </figure>
</section>

<style lang="scss">
  .intro-n-autoportrait {
    display: grid;
    grid-template-columns: 40% min-content 1fr;
    column-gap: 13rem;
    grid-template-rows: 1fr;
    background-color: rgb(238, 238, 238);
    //TESTING:
    // opacity: 0;
    // transition: opacity 0.75s ease-in;

    & .intro {
      margin-top: 6rem;
      margin-left: 4rem;
      &__title {
        font-size: 5rem;
      }
      &__paragraph {
        font-size: 2.25rem;
        line-height: 2;
        &:not(:first-child) {
          margin-top: 3rem;
        }
      }
    }
    & .icon {
      align-self: center;
    }
    & .autoportrait {
      position: relative;
      margin-top: 3rem;
      justify-self: end;
      align-self: end;
      width: 100%;
      height: 100%;

      &-img {
        position: absolute;
        left: 0;
        width: 77rem;
        height: 92rem;
        // width: 100%;
        // height: 100%;
        object-fit: cover; // makes it look nicer
        margin-left: 7.5rem;
        background-image: linear-gradient(to bottom, transparent 0%, transparent 90%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 1) 100%);
        opacity: 0;
        transition: opacity 1s ease-in-out;

        &.opaque {
          opacity: 1;
        }
      }
    }
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
