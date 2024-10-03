<script setup lang="ts">
const props = defineProps({ blok: Object });
console.log(props.blok);

const hoveredIndex = ref<number | null>(null)
const logos = ref<string[]>(["storybook", "react", "java", "mysql", "linux", "bash"]);

const handleMouseover: (argument: MouseEvent) => void = (e: MouseEvent) => {
  const listElement = e.target?.closest("li");
  if (listElement) {
    const listIndex = parseInt(listElement.getAttribute("list-index")); // this doesn't give us a number outright. i need to parseInt()
    hoveredIndex.value = listIndex;
    console.log(hoveredIndex.value)
  }
  console.log("Souris Enter")
}

const handleMouseLeave = () => hoveredIndex.value = null;

const capitalise: (argument: string) => string = (word: string): string => {
  return `${word.charAt(0).toUpperCase()}${word.substring(1)}`
}

watch(() => hoveredIndex, (newValue, oldValue) => {
  console.log(`Old value was ${oldValue.value}`);
  console.log(`New value is ${newValue.value}`);
})
</script>

<template>
  <section class="credentials landing">
    <h2 class="credentials__main-title">Credentials</h2>
    <div class="credentials__content">
      <div class="credentials__left">
        <h3 class="credentials__left--title">Select Certifications</h3>

        <ul class="credentials__list courses">
          <li class="credentials__list--item">
            <p><strong>Course:</strong> Web Development Bootcamp</p>
            <p>Instructor: Colt Steele</p>
          </li>

          <li class="credentials__list--item">
            <p><strong>Course:</strong> Build Responsive Real World Websites with HTML5 & CSS3</p>
            <p>Instructor: Jonas Schmedtmann</p>
          </li>

          <li class="credentials__list--item">
            <p><strong>Course:</strong> Advanced CSS & Sass: Flexbox, Grids, Animations & More</p>
            <p>Instructor: Jonas Schmedtmann</p>
          </li>

          <li class="credentials__list--item">
            <p><strong>Course:</strong> The Complete Javascript Course 2020: Build Real Projects</p>
            <p>Instructor: Jonas Schmedtmann</p>
          </li>
          <li class="credentials__list--item">
            <p><strong>Course:</strong> Vue - The Complete Guide (incl. Router & Composition API)</p>
            <p>Instructor: Max Schwarzmüller</p>
          </li>
        </ul>
      </div>

      <div class="credentials__right">
        <h3 class="credentials__right--title">
          Currently Learning
          <span class="dot dot-one">.</span>
          <span class="dot dot-two">.</span>
          <span class="dot dot-three">.</span>
        </h3>
        <ul @mouseover="handleMouseover($event)" @mouseleave="handleMouseLeave" class="credentials__list learning">
          <li v-for="(currentLogo, index) in logos" :key="index" :list-index="index" class="credentials__list--item">
            <i :class="[`devicon-${currentLogo}-plain`, `${hoveredIndex === index ? 'colored' : ''}`]" />
            <span>{{ currentLogo === "mysql" ? "MySQL" : capitalise(currentLogo) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.credentials {
  padding: 6rem 0;
  background-color: rgb(238, 238, 238);

  @include breakpoint(1023) {
    order: 5; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
  }



  &__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;

    @include breakpoint(1023) {
      flex-direction: column-reverse;
    }
  }

  &__main-title {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  &__left--title,
  &__right--title {
    font-size: 2rem;
    margin-bottom: 2.5rem;

    @include breakpoint(1023) {
      font-size: 3rem;
      text-align: center;
    }
  }

  &__left {

    // &--title {
    //   font-size: 2rem;
    //   margin-bottom: 2.5rem;
    @include breakpoint(1023) {
      margin-top: 3rem;
    }

    // }
  }

  // NOTE: moved code below to LearningList.svelte
  &__list {
    list-style-type: none;
    font-size: 2.5rem;

    // @include breakpoint(1023) {
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: space-around;
    // }

    &--item {
      margin-bottom: 5rem;
    }

    &.courses {
      list-style-type: disc;

      @include breakpoint(1023) {
        margin-left: 3rem;
      }
    }

    &.learning {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      height: 100%;

      @include breakpoint(1023) {
        flex-wrap: wrap;
        justify-content: space-around;
      }

      @include breakpoint(767) {
        flex-flow: row wrap;
      }

      li {
        margin-bottom: 0;

        @include breakpoint(767) {
          margin-bottom: 1.5rem;
        }
      }
    }
  }

  &__right {
    li {
      display: flex;
      align-items: center;

      i {
        font-size: 5rem;
        margin-right: 2rem;

        @include breakpoint(1023) {
          margin-right: 0.25rem;
        }
      }
    }
  }
}

.dot {
  animation: ellipsisFade 1.5s ease infinite;

  &-one {
    animation-delay: 0.1s;
  }

  &-two {
    animation-delay: 0.2s;
  }

  &-three {
    animation-delay: 0.3s;
  }
}
</style>
