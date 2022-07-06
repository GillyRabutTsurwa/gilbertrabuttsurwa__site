<template>
  <section id="slider" class="slider">
    <h2>Hobbies</h2>

    <VueCardStack :cards="cards" :stack-width="1200" :card-width="980" :card-height="800">
      <template v-slot:card="{ card }">
        <figure class="card" :style="`backgroundImage: url(${card.imgSrc})`" style="width: 100%; height: 100%; padding-top: 1rem;">
          <figcaption>

          </figcaption>
        </figure>
      </template>

      <template v-slot:nav="{ activeCardIndex, onNext, onPrevious }">
        <nav class="nav">
          <div class="counter">{{activeCardIndex + 1}}/{{cards.length}}</div>
          <button v-on:click="onPrevious" class="button button__left">
            <span class="chevron left">&laquo;</span>
          </button>
          <button v-on:click="onNext" class="button button__right">
            <span class="chevron right">&raquo;</span>
          </button>
        </nav>
      </template>
    </VueCardStack>

  </section>
</template>

<script>
import VueCardStack from "vue-card-stack";
export default {
  name: "Deuxieme",
  components: {
    VueCardStack: VueCardStack,
  },
  data() {
    return {
      cards: [
        {
          imgSrc: require("@/assets/img/about-slider/pankaj-patel-SXihyA4oEJs-unsplash.jpg"),
        },
        {
          imgSrc: require("@/assets/img/about-slider/annie-spratt-KCQz_b2Hgi8-unsplash.jpg"),
        },
        {
          imgSrc: require("@/assets/img/about-slider/annie-spratt--9vMBjrU-RA-unsplash.jpg"),
        },
        {
          imgSrc: require("assets/img/about-slider/brett-jordan-IjKEHs3JtK4-unsplash.jpg"),
        },
        {
          imgSrc: require("@/assets/img/about-slider/julian-hochgesang--Wd8gStxy3s-unsplash.jpg"),
        },
      ],
    };
  },
  methods: {
    closeAllSliders(sliders) {
      sliders.forEach((currentSlider) => {
        currentSlider.classList.remove("open");
      });
    },
  },
  mounted() {},
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
  margin: 6rem 0;
}

h2 {
  text-align: center;
  font-size: 5rem;
  margin: 4rem 0;
}

// TESTING
.vue-card-stack {
  &__wrapper {
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__stack {
  }

  /* child of above (vue-card-stack__stack) */
  &__card {
    height: 735px !important;
    figure.card {
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;

      &__img img {
        object-fit: cover;
      }
    }
  }
}

.button {
  position: absolute;
  bottom: 30rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  border: 1px solid #ccc;
  color: #2d2d2d;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  z-index: 999;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

// NOTE: i know, it's confusing. left button is using the right attribute to move to the left
.button__left {
  right: 55rem;
}
// NOTE: and same for this one. but eey. it works
.button__right {
  left: 55rem;
}

.nav {
  position: relative;
}
</style>