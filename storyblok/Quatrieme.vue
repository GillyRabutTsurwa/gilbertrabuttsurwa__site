<script setup>
const props = defineProps({ blok: Object });
console.log(props.blok);
</script>

<template>
  <section class="credentials">
    <h2 class="credentials__main-title">Credentials</h2>
    <div class="credentials__content">
      <div class="credentials__left">
        <h3 class="credentials__left--title">Certifications</h3>

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
        <!-- <LearningList /> -->
        <!-- NOTE: moved markup to LearningList.svelte -->
        <ul class="credentials__list learning">
          <li class="credentials__list--item">
            <i class="devicon-storybook-plain" />
            <span>Storybook</span>
          </li>
          <li class="credentials__list--item">
            <i class="devicon-react-plain react-logo" />
            <span>React</span>
          </li>
          <li class="credentials__list--item">
            <i class="devicon-express-original" />
            <span>Express</span>
          </li>
          <li class="credentials__list--item">
            <i class="devicon-mongodb-plain" />
            <span>Mongo DB</span>
          </li>
          <li class="credentials__list--item">
            <i class="devicon-nodejs-plain" />
            <span>Node</span>
          </li>
          <li class="credentials__list--item">
            <i class="devicon-typescript-plain" />
            <span>TypeScript</span>
          </li>
          <li class="credentials__list--item">
            <i class="devicon-bash-plain" />
            <span>Bash Scripts</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "@/assets/sass/mixins";

.credentials {
  padding-top: 6rem;
  background-color: rgb(238, 238, 238);

  @include mixins.breakpoint(1023) {
    order: 5; //NOTE: this works because i display the parent (#app) to be display: grid in pages/index.vue
  }



  &__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;

    @include mixins.breakpoint(1023) {
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

    @include mixins.breakpoint(1023) {
      font-size: 3rem;
      text-align: center;
    }
  }

  &__left {

    // &--title {
    //   font-size: 2rem;
    //   margin-bottom: 2.5rem;
    @include mixins.breakpoint(1023) {
      margin-top: 3rem;
    }

    // }
  }

  // NOTE: moved code below to LearningList.svelte
  &__list {
    list-style-type: none;
    font-size: 2.5rem;

    // @include mixins.breakpoint(1023) {
    //   display: flex;
    //   flex-wrap: wrap;
    //   justify-content: space-around;
    // }

    &--item {
      margin-bottom: 5rem;
    }

    &.courses {
      list-style-type: disc;

      @include mixins.breakpoint(1023) {
        margin-left: 3rem;
      }
    }

    &.learning {
      @include mixins.breakpoint(1023) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
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

        @include mixins.breakpoint(1023) {
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
