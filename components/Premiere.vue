<template>
  <div class="intro-n-autoportrait">
    <div class="intro">
      <h2>TITLE GOES HERE</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas architecto magnam dolore autem odio labore assumenda facilis blanditiis aperiam, fuga eveniet sed nisi dolor veritatis nihil nemo possimus, necessitatibus reprehenderit?
      </p>
    </div>
    <div class="autoportrait">
      <img v-bind:src="myPhoto" alt="Croquis de moi">
    </div>
    <div>

    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            myPhoto: require("../assets/img/autoportrait-croquis.png"),
            // NOTE: WILL USE LATER WELL I FIGURE OUT
            // myPhotos: [
            //     require("../assets/img/autoportrait-croquis.png"),
            //     require("../assets/img/autoportrait-dessin-test.png")
            // ],
            // container: document.querySelector(".intro-n-autoportrait"),
            observerOptions: {
                rootMargin: "525px 0px 0px 0px"
            },
            myObserver: new IntersectionObserver((entries, observerFirstSection) => {
                entries.forEach((currentEntry) => {
                    if (currentEntry.isIntersecting) {
                        console.log(currentEntry);
                    }
                })
            }, this.observerOptions)
        }
    },
    computed: {
      
    },
    mounted() {
        this.myObserver.observe(document.querySelector(".intro-n-autoportrait"));
    }
}
</script>

<style lang="scss">
.intro-n-autoportrait {
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: 1fr;

  & .autoportrait {
    margin-top: -6rem;
    justify-self: center;
    align-self: center;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover; // makes it look nicer
      //   background-color: pink;
      background-image: linear-gradient(
        to bottom,
        transparent 0%,
        transparent 90%,
        rgba(255, 255, 255, 1) 90%,
        rgba(255, 255, 255, 1) 100%
      );
    }
  }
}
</style>