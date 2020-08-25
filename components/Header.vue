<template>
  <header class="header">
    <!-- <i id="devicon"></i> -->
    <div class="header__title">
      <div class="header__title--primary">Gilbert<span>Tsurwa</span></div>
      <!-- <button class="header__button">
                    All my Projects
                </button> -->
      <div class="header__title--secondary">
        <!-- NOTE: data-words must be single quotes. IMPORTANT: -->
        <span class="text-type" data-wait="3000" data-words='["Developper", "Designer", "Creator", "Food Enthusiast"]'></span>
      </div>
      <a href="https://gilbertrabuttsurwa-projects-showcase.netlify.com/" target="_blank" class="header__button">
        All my Projects
      </a>
    </div>
    <!-- SUBSECTION: gallery -->
    <div class="header__slider">
      <div class="header__slider--slide current"></div>
      <div class="header__slider--slide"></div>
      <div class="header__slider--slide"></div>
      <div class="header__slider--slide"></div>
      <div class="header__slider--slide"></div>
      <div class="header__slider--slide"></div>
      <div class="header__slider--slide"></div>
      <div class="header__slider--slide"></div>
      <div class="header__slider--slide"></div>
    </div>
  </header>
</template>

<script>
export default {
    methods: {
        nextSlide() {  
	const slides = document.querySelectorAll(".header__slider--slide");
	const current = document.querySelector(".current");
	let nextImage = current.nextElementSibling;
 
	current.classList.remove("current");
	if (nextImage) {
		nextImage.classList.add("current");
	}
	else {
		slides[0].classList.add("current");
	}
	setTimeout(() => current.classList.remove("current"));
    }
    },
    mounted() {
        setInterval(this.nextSlide, 5000);
    }
        
}
</script>

<style lang="scss">
.header {
  height: 100vh; // on le ramene
  width: 100%;
  position: relative;

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

  //   & #devicon {
  //     display: block;
  //     position: absolute;
  //     top: 3rem;
  //     left: 3rem;
  //     font-size: 9.5rem;
  //     z-index: 1000;
  //     color: #1a2934;
  //     -webkit-animation: fade 3800ms ease-in-out infinite;
  //     animation: fade 3800ms ease-in-out infinite;
  //   }

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
      opacity: 0;
      -webkit-transition: opacity 0.75s ease-in-out;
      transition: opacity 0.75s ease-in-out;

      &.current {
        opacity: 1;
      }

      &:first-child {
        background-image: url(../assets/img/adrian.jpg);
      }

      &:nth-child(2) {
        background-image: url(../assets/img/robin-spielmann-birds-flying.jpg);
      }

      &:nth-child(3) {
        background-image: url(../assets/img/michael-calamas-camera-lens.jpg);
        background-position-y: 1%;
      }

      &:nth-child(4) {
        background-image: url(../assets/img/brooke-lark.jpg);
      }

      &:nth-child(5) {
        background-image: url(../assets/img/sarah-dorweiler-2.jpg);
      }

      &:nth-child(6) {
        background-image: url(../assets/img/men-on-boat.jpg);
        background-position-x: 20%;
      }

      &:nth-child(7) {
        background-image: url(../assets/img/joanna-kosinska-2.jpg);
        background-position-y: 100%;
      }

      &:nth-child(8) {
        background-image: url(../assets/img/sarah-dorweiler.jpg);
        background-position-y: 1%;
      }

      &:nth-child(9) {
        background-image: url(../assets/img/kate-treadway-twiga.jpg);
        background-position-y: 100%;
      }
    }
  }
}
</style>