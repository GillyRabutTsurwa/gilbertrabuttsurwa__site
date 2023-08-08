<template>
  <Carousel :wrapAround="true">
    <Slide v-for="(currentImage, index) in images" :key="index">
      <div class="card" style="width: 85%; height: 100%; padding-top: 1rem;">
        <figure class="card-img">
          <img :src="types[currentImage.name]">
          <figcaption>{{ currentImage.caption }}</figcaption>
        </figure>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>
  
<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Pagination, Slide } from "vue3-carousel";

// IMPORTANTNOTE: the original documentation gives: import 'vue3-carousel/carousel.css' this is wrong, upon inspecting the library file/folder content
import "vue3-carousel/dist/carousel.css"; //NOTE: this is correct

export default defineComponent({
  name: "Basic",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
});
</script>

<script setup>
import { filename } from "pathe/utils";

const glob = import.meta.glob("~/assets/img/*.jpeg", { eager: true });
const types = Object.fromEntries(Object.entries(glob).map(([key, value]) => [filename(key), value.default]));

const imgName = "card-pic-1";

//TODO: Later, put this content in Sanity
const images = [
  { name: "card-pic-1", caption: "At a Chinese restaurant with a pretty girl taking a photo of me. No smiling" },
  { name: "card-pic-2", caption: "At an amusment park in a classified location. My trousers in this photo, were way to tight" },
  { name: "card-pic-3", caption: "Hyperextended something in my shoulder the day before and went for a day out the day after." },
  {
    name: "card-pic-4",
    caption:
      "During these days, I spent all nighters learning how to code. Lights off, music on and going at it till dawn (that sounds a bit dirty).",
  },
  { name: "card-pic-5", caption: "My footballing days in university" },
];
</script>
  
<style scoped>
/* NOTE: styles added by me */
.carousel {
  width: 500px;
}

.carousel__viewport,
.carousel__track,
.carousel__track li {
  width: 100%;
}

.carousel__viewport,
.carousel__track {
  height: 1000px;
}

.carousel__track li {
  height: 560px;
}

/*  */
.carousel__item {
  min-height: 500px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.card {
  background-color: rgb(238, 238, 238);
  -webkit-box-shadow: 0px 5px 14px -3px #000000;
  box-shadow: 0px 5px 14px -3px #000000;
}

.card-img {
  width: 90%;
  height: 70%;
  border: 2px solid black;
  margin: 0 auto;
  background-color: rgb(238, 238, 238);
}

.card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

figcaption {
  margin-top: 3rem;
  line-height: 1.5;
}
</style>
  