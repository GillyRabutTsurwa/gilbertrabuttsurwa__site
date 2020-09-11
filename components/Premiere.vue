<template>
  <div class="intro-n-autoportrait">
    <div class="intro">
      <h2 class="intro__title">Introduction</h2>
      <p class="intro__paragraph">
        Currently a front-end web developer intern at, <a href="https://www.aeonnova.com/" target="_blank" class="link__aeonnova">Aeonnova Consulting</a>. I specialise in front-end web development. Particularly with Vanilla Javascript and the Vue framework. I am learning React and Svelte on the side. I am very interested in front-end JavaScript frameworks. I am confident and capable, but I have a lot to learn.
      </p>
      <p class="intro__paragraph deuxieme">
        Whilst making front-end development my craft, I later decided to do the same with UI/UX design. I am therefore currently learning this using Adobe XD, with the keen intent on adeptly designing full interfaces for all devices.
      </p>
      <p class="intro__paragraph deuxieme">
        Yes, I do have a life outside coding. To find out what I do when I'm not coding or designing, checkout the slider below.
      </p>
      <p class="arrow">
        <a href="#slider">&darr;</a>
      </p>
    </div>
    <div class="autoportrait">
      <img v-bind:src="myPhoto" alt="Croquis de moi">
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myPhoto: require("../assets/img/autoportrait-croquis.png"),
      // NOTE: WILL USE LATER WELL I FIGURE OUT
      // myPhotos: [
      //     require("../assets/img/autoportrait-croquis.png"),
      //     require("../assets/img/autoportrait-dessin-test.png")
      // ],
      // container: document.querySelector(".intro-n-autoportrait"),
    };
  },
  computed: {},
  mounted() {
    // NOTE: Failed. Je vais y revenir.
    // const observerOptions = {
    //         // root: document.querySelector("#app"),
    //         rootMargin: "100px 0px 0px 0px",
    //         threshold: 0
    // };
    // const myObserver = new IntersectionObserver((entries) => {
    //     entries.forEach((currentEntry) => {
    //         if (currentEntry.isIntersecting) {
    //             console.log(currentEntry);
    //             currentEntry.target.style.fontWeight = "bolder";
    //         }
    //     })
    // }, observerOptions)
    // myObserver.observe(document.querySelector(".intro-n-autoportrait"));
  },
};
</script>

<style lang="scss">
.intro-n-autoportrait {
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 1fr;
  background-color: rgb(238, 238, 238);

  @include responsive(tablet-portrait) {
    background-color: pink;
  }

  & .intro {
    margin-top: 6rem;
    margin-left: 4rem;

    &__title {
      font-size: 5rem;
    }
    &__paragraph {
      font-size: 2.2rem;
      line-height: 1.5;

      &:not(:first-child) {
        margin-top: 3rem;
      }
    }
  }

  & .autoportrait {
    margin-top: -6rem;
    justify-self: center;
    align-self: end;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; // makes it look nicer
      //   background-color: pink;
      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 90%,
        rgba(255, 255, 255, 1) 90%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }
}

.link__aeonnova {
  &:link,
  &:visited {
    text-decoration: none;
    font-weight: bold;
    color: currentColor;
    font-style: normal;
  }

  &:hover,
  &:active {
    font-style: italic;
  }
}
.arrow {
  font-size: 5rem;
  text-align: center;
  margin: 1.5rem;

  a {
    &:link,
    &:visited {
      text-decoration: none;
      color: currentColor;
    }
  }
}
</style>