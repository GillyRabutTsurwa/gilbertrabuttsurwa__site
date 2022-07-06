<template>
  <section class="intro-n-autoportrait">
    <div class="intro">
      <h2 class="intro__title">Introduction</h2>
      <p class="intro__paragraph">
        Currently a web developer at, <a href="https://su.edu/" target="_blank" rel="noopener noreferrer" class="link__job">Shenandoah University</a>. I specialise in front-end web development, particularly with Vanilla Javascript and the Vue framework. Additionally, I am learning React
        and SvelteKit as it is important and advantageous to be comfortable with different libraries, frameworks, languages etc. I am steady learner, attentive, and harbour a good set of researching skills that help me quickly pick up new technologies.
      </p>
      <p class="intro__paragraph deuxieme">
        Whilst making front-end development my craft, I am also extensively about back-end development. Particularly, I'm diving into NodeJS, MongoDB and the Express framework. Although I have a background using all three, I am learning them more intently with the aim of comfortably using them to make full stack applications and become a full-stack developer.
      </p>
      <p class="intro__paragraph deuxieme">
        Yes, I do have a life outside coding. To find out what I do when I'm not coding or designing, checkout the slider below.
      </p>
      <p class="arrow">
        <a href="#slider">&darr;</a>
      </p>
    </div>
    <div class="autoportrait">
      <transition-group name="fade" tag="div">
        <div v-for="currentValue in [currentIndex]" v-bind:key="currentValue" class="autoportrait-img">
          <img v-bind:src="currentPhoto" alt="Croquis de moi">
        </div>
      </transition-group>
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
      myPhotos: [
        require("~/assets/img/autoportrait-croquis.png"),
        require("~/assets/img/autoportrait-croquis-2.png"),
        require("~/assets/img/moi-high-top.png"),
      ],
      currentIndex: 0,
    };
  },
  methods: {
    switchPhotos() {
      this.currentIndex += 1;
      if (this.currentIndex > this.myPhotos.length - 1) {
        this.currentIndex = 0;
      }
    },
    startPhotoSlide() {
      setInterval(this.switchPhotos, 7000);
    },
  },
  computed: {
    currentPhoto() {
      return this.myPhotos[this.currentIndex];
    },
  },
  mounted() {
    this.startPhotoSlide();
  },
};
</script>

<style lang="scss">
.intro-n-autoportrait {
  display: grid;
  grid-template-columns: 40% 1fr;
  column-gap: 13rem;
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

    &-img {
      width: 77rem;
      height: 92rem;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover; // makes it look nicer
        //   background-color: pink;
        background-image: linear-gradient(to bottom, transparent 0%, transparent 90%, rgba(255, 255, 255, 1) 90%, rgba(255, 255, 255, 1) 100%);
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

  // &::before {
  //   // NOTE: Underline effecc
  //   content: "";
  //   position: absolute;
  //   display: block;
  //   border-bottom: 3px solid slateblue;
  //   transform: scaleX(0);
  //   transition: transform 0.25s ease-in-out;
  //   transform-origin: 0% 50%;
  // }
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

// NOTE: Same transition used in header. I will refactor this later as I am duplicating code
.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s ease-in;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>