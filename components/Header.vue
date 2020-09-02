<template>
  <header class="header">
    <i id="devicon"></i>
    <div class="header__title">
      <div class="header__title--primary">Gilbert<span>Tsurwa</span></div>
      <div class="header__title--secondary">
        <span class="text-type" data-wait="3000" data-words='["Developper", "Designer", "Creator", "Food Enthusiast"]'></span>
      </div>
      <nuxt-link to="/projects" class="header__button">
        All my Projects
      </nuxt-link>
    </div>
    <!-- SUBSECTION: gallery -->
    <div class="header__slider">
      <transition-group name="fade" tag="div">
        <div v-for="currentValue in [currentIndex]" v-bind:key="currentValue" v-bind:style="{backgroundImage: `url(${currentImg})`}" class="header__slider--slide" v-bind:class="{kosinka: currentIndex === 6, leaf: currentIndex === 7, girrafe: currentIndex === 8}"></div>
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
      timer: null,
      images: [
        require("../assets/img/adrian.jpg"),
        require("../assets/img/robin-spielmann-birds-flying.jpg"),
        require("../assets/img/michael-calamas-camera-lens.jpg"),
        require("../assets/img/brooke-lark.jpg"),
        require("../assets/img/sarah-dorweiler-2.jpg"),
        require("../assets/img/men-on-boat.jpg"),
        require("../assets/img/joanna-kosinska-2.jpg"),
        require("../assets/img/sarah-dorweiler.jpg"),
        require("../assets/img/kate-treadway-twiga.jpg"),
      ],
      // TESTING FOR SPECIFIC BG POSITION STYLES
      bgPositionChanges: {},
    };
  },
  methods: {
    next() {
      this.currentIndex += 1;
      if (this.currentIndex > this.images.length - 1) {
        this.currentIndex = 0;
      }
    },
    startSlide() {
      this.timer = setInterval(this.next, 6000);
    },
    iconChange() {
      let icon = document.querySelector("#devicon");

      let iconArray = [
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
      ];

      const oneByOne = () => {
        iconArray.forEach((currentIcon, index) => {
          setInterval(() => {
            icon.setAttribute("class", `devicon-${currentIcon}`);
          }, 3800 * (index + 1));
        });
      };
      oneByOne();
    },
  },
  computed: {
    currentImg() {
      // return this.images[Math.abs(this.currentIndex) % this.images.length];
      return this.images[this.currentIndex];
    },
  },
  mounted() {
    // setTimeout(() => {
    //   setInterval(this.nextSlide, 5000);
    // }, 3800);
    // this.iconChange();
    this.startSlide();
  },
};
</script>

<style lang="scss">
.header {
  height: 100vh; // on le ramene
  width: 100%;
  position: relative;

  & #devicon {
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
    text-align: right;
    padding-right: 7rem;
    margin-bottom: 7rem;
    z-index: 1000;

    &--primary {
      font-size: 13rem;
      font-weight: 600;
      text-transform: uppercase;
      padding-bottom: 2rem;

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

      // &.current {
      //   opacity: 1;
      // }

      // &:first-child {
      //   background-image: url();
      // }

      // &:nth-child(2) {
      //   background-image: url(../assets/img/);
      // }

      // &:nth-child(3) {
      //   background-image: url(../assets/img/);
      //   background-position-y: 1%;
      // }

      // &:nth-child(4) {
      //   background-image: url(../assets/img/);
      // }

      // &:nth-child(5) {
      //   background-image: url(../assets/img/);
      // }

      // &:nth-child(6) {
      //   background-image: url(../assets/img/);
      //   background-position-x: 20%;
      // }

      // &:nth-child(7) {
      //   background-image: url(../assets/img/);
      //   background-position-y: 100%;
      // }

      // &:nth-child(8) {
      //   background-image: url(../assets/img/);
      //   background-position-y: 1%;
      // }

      // &:nth-child(9) {
      //   background-image: url(../assets/img/);
      //   background-position-y: 100%;
      // }
    }
  }
}

.leaf {
  background-position-y: 1%;
}

.girrafe,
.kosinka {
  background-position-y: 100%;
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
</style>