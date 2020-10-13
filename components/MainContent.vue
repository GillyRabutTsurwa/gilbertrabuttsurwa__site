<template>
  <div class="maincontent">
    <Navigation />
    <Tete />
    <Premiere class="observable" />
    <Deuxieme class="observable" />
    <Troisieme class="observable" />
    <Quartrieme class="observable" />
    <Cinquieme class="observable" />
    <Pied />
  </div>
</template>

<script>
import Navigation from "./Navigation";
import Header from "./Header";
import Premiere from "./Premiere";
import Deuxieme from "./Deuxieme";
import Troisieme from "./Troisieme";
import Quartrieme from "./Quartrieme";
import Cinquieme from "./Cinquieme";
import Footer from "./Footer";

export default {
  name: "MainContent",
  components: {
    Navigation: Navigation,
    Tete: Header,
    Premiere: Premiere,
    Deuxieme: Deuxieme,
    Troisieme: Troisieme,
    Quartrieme: Quartrieme,
    Cinquieme: Cinquieme,
    Pied: Footer,
  },
  data() {
    return {
      observer: null,
    };
  },
  created() {
    console.log(this);
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((currentEntry) => {
          console.log(currentEntry);
          if (currentEntry.isIntersecting) {
            currentEntry.target.classList.add("observer-appear");
          }
        });
      },
      {
        root: this.$el,
        threshold: 0.3,
      }
    );
  },
  mounted() {
    console.dir(this.$el); // nous donne la structure HTML de cette Vue composant. On peut acceder aux enfants
    const sectionsOnly = Array.from(this.$el.children).filter(
      (currentElement) => {
        return currentElement.tagName === "SECTION";
      }
    ); 
    sectionsOnly.forEach((current) => {
      this.observer.observe(current);
    });
  },
};
</script>

<style>
/* TESTING */
.maincontent {
  height: 100%;
}

.observable {
  opacity: 0;
  transition: opacity 0.75s ease-in;
}

.observer-appear {
  opacity: 1;
}
</style>