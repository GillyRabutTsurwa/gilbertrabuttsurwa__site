<template>
  <section id="slider" class="slider">
    <h2>Hobbies</h2>

    <VueCardStack :cards="cards" :stack-width="1200" :card-width="980" :card-height="800">
      <template v-slot:card="{ card }">
        <!-- FIX: ca marche, mais cet element de "figure" contient trop de boilerplate code -->
        <figure class="card" :style="`backgroundImage: linear-gradient(to top right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), url(${card.imgSrc})`" style="width: 100%; height: 100%; padding-top: 1rem;">
          <figcaption>
            <h4>{{card.title}}</h4>
            <p>{{card.text}}</p>
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
          title: "Coding",
          imgSrc: require("@/assets/img/about-slider/pankaj-patel-SXihyA4oEJs-unsplash.jpg"),
          text: "Let me get the obvious one out of the way: I code for a hobby as well. Right now I'm really enjoying using Svelte, and I am coming around to using React. Ultimately when I code for leisure, I love tinkering around with JavaScript and CSS",
        },
        {
          title: "Hiking",
          imgSrc: require("@/assets/img/about-slider/annie-spratt-KCQz_b2Hgi8-unsplash.jpg"),
          text: "Snippet Coming Soon",
        },
        {
          title: "Reading",
          imgSrc: require("@/assets/img/about-slider/annie-spratt--9vMBjrU-RA-unsplash.jpg"),
          text: "Reading keeps me sharp. Hence why I like to do it. If the story is captivating, even better. Ultimately, reading for me is a lot like lifting weights, but for your brain. I'm not in love with it, but I like it a lot and appreciate its benefits. That being said, the more I do it, the more I am coming around to it.",
        },
        {
          title: "Listening & Collecting Music",
          imgSrc: require("assets/img/about-slider/brett-jordan-IjKEHs3JtK4-unsplash.jpg"),
          text: "Like most, I love listening to music. I've been all over the place with music since I got my first iPod when I was 14. Although this is against my nature, I am very picky pertaining to the music I listen to. If you're curious about what I listen to, take a look at my Spotify of Soundcloud (Links in Footer).",
        },
        {
          title: "Sleeping",
          imgSrc: require("@/assets/img/about-slider/julian-hochgesang--Wd8gStxy3s-unsplash.jpg"),
          text: "Maybe napping would be a more appropriate title. I like to take naps whenever I can, even though I do not need them. Although they're supplementary to my nighttime sleep, they provide better energy, a lighter mood, and declutter the mind",
        },
      ],
    };
  },
  methods: {},
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
      display: flex;
      justify-content: center;
      align-items: flex-end;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;

      &__img img {
        object-fit: cover;
      }

      figcaption {
        color: #fefefe;
        width: 50%;
        padding-bottom: 3rem;

        h4 {
          font-size: 4.5rem;
        }

        p {
          font-size: 2rem;
          line-height: 1.25;
        }
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