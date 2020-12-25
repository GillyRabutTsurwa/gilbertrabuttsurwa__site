<template>
  <section class="intro-n-autoportrait">
    <div class="intro">
      <h2 class="intro__title">Introduction</h2>
      <p class="intro__paragraph">
        Currently a front-end web developer intern at, <a href="https://www.aeonnova.com/" target="_blank" class="link__aeonnova">Aeonnova Consulting</a>. I specialise in front-end web development, particularly with Vanilla Javascript and the Vue framework. Additionally, I am learning React and Svelte as it is important and advantageous to be comfortable with different libraries, frameworks, languages etc. I am fast learner, attentive, and harbour a good set of researching skills that help me quickly pick up new technologies.
      </p>
      <p class="intro__paragraph deuxieme">
        Whilst making front-end development my craft, I am also extensively learning UI/UX design. I am expanding my knowledge and expertise of this using Adobe XD, with the keen intent on designing full website and web application interfaces for all types of devices, with ease.
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
  </section>
</template>

<script>
export default {
  name: "Premiere",
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
  mounted() {},
};
</script>

<style lang="scss">
.intro-n-autoportrait {
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 1fr;
  background-color: rgb(238, 238, 238);
  //TESTING:
  // opacity: 0;
  // transition: opacity 0.75s ease-in;

  @include responsive(tablet-portrait) {
    // background-color: pink;
    grid-template-columns: 20% 1fr; //TESTING;
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