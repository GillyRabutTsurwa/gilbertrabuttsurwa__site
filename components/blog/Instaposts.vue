<script setup>
const { data: instaposts, pending, error } = await useAsyncData("instaposts", () => $fetch("/api/instaposts"));
const featuredInstaPosts = ref([]);

pending.value = true;

function randomArray(arr) {
  let newArray = [];
  let numofPosts = 9;

  //NOTE: using while loop for the 1st time in a while
  // whenever the length of the new array is less than the number of posts
  while (newArray.length < numofPosts) {
    // generate a random number
    const randomNumber = Math.round(Math.random() * (arr.length - 1));
    // and if that specific value does not already exist in the eventually returned array
    if (!newArray.includes(arr[randomNumber])) {
      // then push that value to that array
      newArray.push(arr[randomNumber]);
    }
  }
  return newArray;
}
onMounted(() => {
  setTimeout(() => {
    featuredInstaPosts.value = randomArray(instaposts.value.data);
    pending.value = false;
  }, 3000);
});
</script>

<template>
  <Spinner v-if="pending" />
  <div class="picture-category__category">
    <h4 class="picture-category__category--title">Instagram</h4>
    <div class="instagram-images">
      <figure v-for="currentInsta in featuredInstaPosts">
        <a :href="currentInsta.permalink" target="_blank" rel="noopener noreferrer">
          <img :src="currentInsta.media_url" alt="">
        </a>
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
