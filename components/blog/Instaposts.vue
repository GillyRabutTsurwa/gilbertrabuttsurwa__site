<script setup>
const { data: instaposts, pending, error } = await useAsyncData("instaposts", () => $fetch("/api/instaposts"));
const featuredInstaPosts = ref([]);

pending.value = true;

function randomArray(arr) {
  let newArray = [];
  let numofPosts = 9;

  while (newArray.length < numofPosts) {
    const randomNumber = Math.round(Math.random() * (arr.length - 1));
    if (!newArray.includes(arr[randomNumber])) {
      newArray.push(arr[randomNumber]);
    }
  }
  return newArray;
}
onMounted(() => {
  setTimeout(() => {
    try {
      if (instaposts.value?.data) {
        featuredInstaPosts.value = randomArray(instaposts.value.data);
        pending.value = false;
      } else {
        throw new Error("Can't Fetch Instagram Posts")
      }
    } catch (err) {
        pending.value = false;
        error.value = err.message;
        console.log(error.value);
    } finally {
      console.log("Process of fetching posts complete");
    }
  }, 3000);
});
</script>

<template>
  <section class="xyz">
    <h4>Insta</h4>
    <div class="instagram-images">
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
