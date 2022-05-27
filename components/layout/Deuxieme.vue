<template>
  <section id="slider" class="slider">
    <div class="slider__container" ref="sliderRef">
      <div class="slide">
        <div class="content">
          <h2 class="content__title">Reading (Code)</h2>
          <p class="content__text">
            As a developer, I reading and understanding code is a must. As much as this is a necessity, it has also become a leisure activity for me. I read code to freshen up on important fundamentals, learn new syntaxe, and pick up on tips to run cleaner and more readable code. Furthermore, I enjoy reading web techonology documentation to help me get familiar with what I am using or learning. I am currently reading the Sass documentation to pick up on some new things I can implement in the future.
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2 class="content__title">Naturing</h2>
          <p class="content__text">
            Yes, I know I made a word up. I like to stroll (not hike) around in nature and take in the fresh air, preferably by the lakeside, the shore or around plains and flatlands - though I like to venture the woods from time to time.
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2 class="content__title">Reading (Books) </h2>
          <p class="content__text">
            Aside from reading code, I like general reading, as it is good for acquiring knowledge, and for mental sharpness. Also, it can be a stress reliever, if you choose the right topics. In my freetime, I like to read all sorts of things. Ranging from French textbooks, to biblical stories to WWII novels and memoirs, and everything caught in the middle.
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2 class="content__title">Exploring New Music</h2>
          <p class="content__text">
            I like exploring new music that is under the genres of Lofi-Hiphop or Vapourwave; two of my favourties. Follow me on Spotify and Bandcamp.
          </p>
        </div>
      </div>
      <div class="slide">
        <div class="content">
          <h2 class="content__title">Napping</h2>
          <p class="content__text">
            I can operate on little sleep, at night, as a result of short quality naps. This gives me a chance to keep productive whilst staying up for more hours of the day. Rest is crucial, and good rest is sweet. So I get my naps in one way or another.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Deuxieme",
  data() {
    return {};
  },
  methods: {
    closeAllSliders(sliders) {
      sliders.forEach((currentSlider) => {
        currentSlider.classList.remove("open");
      });
    },
    // NOTE: Remindeer - we implicitly have access to e, quand on fait des evenments.
    openFlexSliders() {
      console.log();
      console.log(this.$refs.sliderRef.children);
      let flexSliders = [...this.$refs.sliderRef.children];
      flexSliders.forEach((currentSlide) => {
        currentSlide.addEventListener("click", () => {
          this.closeAllSliders(flexSliders);
          currentSlide.classList.add("open");
        });
        // currentSlide.classList.remove("open");
      });
      // if (e.target.classList.contains("slide")) {
      //   e.target.classList.toggle("open");
      // }
    },
  },
  mounted() {
    // console.log(this.parentOfSlides);
    const slides = document.querySelectorAll(".slide");
    console.log(slides);
    slides.forEach((currentSlide) => {
      console.log(currentSlide.style.backgroundImage);
    });
    this.openFlexSliders();
  },
};
</script>

<style lang="scss" scoped>
// #slider {
//   overflow-y: scroll;
//   scroll-behavior: smooth;
//   scroll-snap-type: y mandatory;
// }

.slider {
  width: 100%;
  height: 100%;

  &__container {
    width: 100%;
    height: 100vh;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    border: 2px solid rgb(238, 238, 238);

    @include responsive(tablet-portrait) {
      flex-direction: column;
    }

    .slide {
      position: relative;
      height: 100%;
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      border-right: 2px solid rgb(238, 238, 238);
      overflow: hidden;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
      //   background-color: #1a2934;
      cursor: pointer;

      &:nth-child(1) {
        background-image: url(../../assets/img/about-slider/pankaj-patel-SXihyA4oEJs-unsplash.jpg);
        background-size: cover;
        background-position: top center;
      }

      &:nth-child(2) {
        background-image: url(../../assets/img/about-slider/annie-spratt-KCQz_b2Hgi8-unsplash.jpg);
        background-position: center center;
      }

      &:nth-child(3) {
        background-image: url(../../assets/img/about-slider/annie-spratt--9vMBjrU-RA-unsplash.jpg);
        background-position: top center;
      }
      &:nth-child(4) {
        background-image: url(../../assets/img/about-slider/brett-jordan-IjKEHs3JtK4-unsplash.jpg);
        background-size: cover;
        background-position: center center;
      }
      &:nth-child(5) {
        background-image: url(../../assets/img/about-slider/julian-hochgesang--Wd8gStxy3s-unsplash.jpg);
        background-size: cover;
        background-position: top center;
      }

      // &:hover, used to be this.
      &.open {
        -webkit-box-flex: 5;
        -ms-flex-positive: 5;
        flex-grow: 5;

        & .content {
          visibility: visible;
          opacity: 1;
          -webkit-transition: 0.5s;
          transition: 0.5s;
          -webkit-transition-delay: 0.5s;
          transition-delay: 0.5s;
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
      }

      .content {
        position: absolute;
        bottom: 0;
        margin: 40px;
        padding: 30px;
        background-color: #000;
        color: #fff;
        visibility: hidden;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        -webkit-transition: 0s;
        transition: 0s;
      }
    }
  }
}
</style>