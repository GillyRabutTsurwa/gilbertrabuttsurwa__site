<template>
  <header class="header">
    <i v-bind:class="`devicon-${currentDevicon}`"></i>
    <div class="header__title">
      <h1 v-bind:class="{'invisible-title': kenyaFlagImg}" class="header__title--primary">Gilbert<span>Rabut</span><span>Tsurwa</span></h1>
      <div class="header__title--secondary">
        <span class="text-type" data-wait="3000" data-words='["Developper", "Designer", "Creator", "Food Enthusiast"]'></span>
      </div>
      <nuxt-link to="/projects" target="_blank" class="header__button">
        All my Projects
      </nuxt-link>
    </div>
    <!-- SUBSECTION: gallery -->
    <div class="header__slider">
      <transition-group name="fade" tag="div">
        <div v-for="currentValue in [currentIndex]" v-bind:key="currentValue" v-bind:style="{backgroundImage: `url(${currentImg})`}" class="header__slider--slide" v-bind:class="bgPositionChanges"></div>
      </transition-group>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      currentIndex: 0,
      currentIndex2: 0,
      timer: null,
      images: [
        require("~/assets/img/header/adrian.jpg"),
        require("~/assets/img/header/robin-spielmann-birds-flying.jpg"),
        require("~/assets/img/header/kenya-flag.jpg"),
        require("~/assets/img/header/michael-calamas-camera-lens.jpg"),
        require("~/assets/img/header/sarah-dorweiler-2.jpg"),
        require("~/assets/img/header/men-on-boat.jpg"),
        require("~/assets/img/header/glen-carrie-birds-chilling.jpg"),
        require("~/assets/img/header/joanna-kosinska-vikombe.jpg"),
        require("~/assets/img/header/sarah-dorweiler-leaf.jpg"),
        require("~/assets/img/header/kate-treadway-twiga.jpg"),
      ],
      iconArray: [
        "html5-plain",
        "css3-plain",
        "javascript-plain",
        "vuejs-plain",
        "bootstrap-plain",
        "sass-original",
        "jquery-plain",
        "nodejs-plain",
        "express-original-wordmark",
        "mongodb-plain-wordmark",
        "git-plain",
        "github-plain",
        "webpack-plain",
        "babel-plain",
        "heroku-original-wordmark",
        "gulp-plain",
      ],
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex += 1;
      if (this.currentIndex > this.images.length - 1) {
        this.currentIndex = 0;
      }
    },
    nextIcon() {
      this.currentIndex2 += 1;
      if (this.currentIndex2 > this.iconArray.length - 1) {
        this.currentIndex2 = 0;
      }
    },
    startSlide() {
      this.timer = setInterval(this.nextSlide, 6000);
    },
    startIcons() {
      setInterval(this.nextIcon, 4000);
    },
  },
  computed: {
    currentImg() {
      // return this.images[Math.abs(this.currentIndex) % this.images.length];
      return this.images[this.currentIndex];
    },
    currentDevicon() {
      return this.iconArray[this.currentIndex2];
    },
    // NEWTESTING:
    // PASS: Great way to bind classes. Much better than using the data property. Computed is coo
    bgPositionChanges() {
      return {
        "birds-chilling": this.currentIndex === this.images.findIndex((currentURL) => currentURL.includes("birds-chilling")),
        // kosinka: this.currentIndex === 6,
        vikombe: this.currentIndex === this.images.findIndex((currentURL) => currentURL.includes("vikombe")),
        //leaf: this.currentIndex === 7,
        leaf: this.currentIndex === this.images.findIndex((currentURL) => currentURL.includes("leaf")),
        //giraffe: this.currentIndex === 8,
        twiga: this.currentIndex === this.images.findIndex((currentURL) => currentURL.includes("twiga")),
      };
    },
    kenyaFlagImg() {
      // // un peu confusant. si l'index n'egale pas l'image avec le drapeu kenyain, afficher notre titre principale (consulter ligne 5). pour example, disons l'indice de l'image est 4, est notre indice actuel est 2. 2 !== 4 est true, donc notre titre va s'afficher. mais si notre indice est 4: 4 !== 4 est false et notre titre va se cacher.
      // dans le cas que le commentaire dessus est pertinant (relevant), le voila, mais il à cause des changements dans mon code, il s'applique plus.
      return this.currentIndex === this.images.findIndex((currentURL) => currentURL.includes("kenya"));
    },
  },
  mounted() {
    // setTimeout(() => {
    //   setInterval(this.nextSlideSlide, 5000);
    // }, 3800);
    // this.iconChange();
    this.startSlide();
    this.startIcons();
  },
};
</script>

<style lang="scss">
.header {
  height: 100vh; // on le ramene
  width: 100%;
  position: relative;

  & i[class^="devicon"] {
    display: block;
    position: absolute;
    top: 3rem;
    left: 3rem;
    font-size: 9.5rem;
    z-index: 1000;
    color: #1a2934;
    -webkit-animation: fade 3800ms ease-in-out infinite;
    animation: fade 3800ms ease-in-out infinite;
  }

  &__title {
    position: absolute;
    top: 11%;
    right: 5%;
    display: inline-block;
    text-align: center;
    padding-right: 7rem;
    margin-bottom: 7rem;
    z-index: 1000;

    &--primary {
      font-size: 10.5rem;
      font-weight: 600;
      text-transform: uppercase;
      padding-bottom: 2rem;
      //TESTING
      opacity: 1;
      transition: all 2.5s ease;

      span {
        display: block;
      }
    }

    &--secondary {
      font-size: 4rem;
      height: 4.5rem; // To give it a fixed witdth so that the button doesn't move up when there's not text,
    }
  }

  // NOTE: Je vais ce deplacer
  &__button {
    display: inline-block;
    border: 2px solid #000;
    border-radius: 1rem;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    padding: 1.5rem 3rem;
    margin-top: 3rem;
    background-color: #1a2934;
    cursor: pointer;
    z-index: 10000;

    // &:focus {
    // 	outline: none;
    // }

    &:hover {
      background-color: #fff;
      color: #1a2934;
    }
  }

  &__slider {
    height: 100%;
    width: 100%;
    position: relative;

    &--slide {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
}

.invisible-title {
  visibility: hidden;
  opacity: 0;
}

.birds-chilling {
  background-position-y: 20rem;
}

.leaf {
  background-position-y: 1%;
}

.vikombe {
  background-position-y: 100%;
}

.twiga {
  background-position-y: 95%;
}

.kenyanFlag {
  background-position-x: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 3s ease-in;
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

// header animation
@keyframes fade-title {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>