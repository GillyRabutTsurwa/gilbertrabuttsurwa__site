<template>
  <div id="app">
    <transition name="appear" mode="out-in">
      <component v-bind:is="component">
      </component>
    </transition>
  </div>
</template>

<script>
import Loader from "../components/Loader";
import MainContent from "../components/MainContent";
export default {
  components: {
    Loader: Loader,
    MainContent: MainContent
  },
  data() {
    return {
      component: "Loader"
    };
  },
  mounted() {
    window.addEventListener("load", () => { 
      setTimeout(() => {
        this.component = "MainContent";
      }, 3000);
    });
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.appear-enter-active {
  animation: appear 1s;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
