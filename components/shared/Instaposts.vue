<script setup>
const { data: instaposts, status, error } = await useFetch("/api/instaposts");
const featuredInstaPosts = computed(() => randomArray(instaposts.value));

status.value = "pending";

function randomArray(arr, numPosts = 12) {
  let newArray = [];

  while (newArray.length < numPosts) {
    const randomNumber = Math.round(Math.random() * (arr.length - 1));
    if (!newArray.includes(arr[randomNumber])) {
      newArray.push(arr[randomNumber]);
    }
  }
  return newArray;
}

setTimeout(() => (status.value = "success"), 5000);
</script>

<template>
  <section class="xyz">
    <h4>Insta</h4>
    <Spinner v-if="status === 'pending'" :dimensions="150" />
    <div v-else-if="error">
      <p>{{ error.statusMessage }}</p>
    </div>
    <div v-else class="instagram-images">
      <figure v-for="currentInsta in featuredInstaPosts">
        <a :href="currentInsta.permalink" target="_blank" rel="noopener noreferrer">
          <img :src="currentInsta.media_url" alt="">
        </a>
      </figure>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h3,
h4 {
  text-align: center;
  margin-top: 3rem;
}

h3 {
  font-size: 5rem;
}

h4 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.xyz {
  // is a grid item;
  // place-self: center;
  // margin: 0 auto;
}

.instagram-images {
  display: grid;
  grid-template-columns: repeat(3, 15rem);
  grid-auto-rows: 15rem;
  gap: 1.5rem;

  figure {
    width: 100%;
    height: 100%;

    a,
    img {
      width: inherit;
      height: inherit;
    }

    img {
      object-fit: cover;
      -o-object-fit: cover;
    }
  }
}
</style>
