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
            <p><strong>Course:</strong> VueJS 2 - The Complete Guide (incl. Vue Router & Vuex)</p>
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
        <ul class="credentials__list learning">
          <li class="credentials__list--item">
            <i class="devicon-react-plain react-logo"></i>
            React
          </li>
          <li class="credentials__list--item">
            <i class="devicon-typescript-plain"></i>
            TypeScript
          </li>

          <li class="credentials__list--item">
            <i class="devicon-nodejs-plain"></i>
            Node
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Cinquieme",
};
</script>

<style lang="scss">
.credentials {
  padding-top: 6rem;
  background-color: rgb(238, 238, 238);

  &__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
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
  }

  &__left {
    // &--title {
    //   font-size: 2rem;
    //   margin-bottom: 2.5rem;
    // }
  }
  &__list {
    list-style-type: none;
    font-size: 2.5rem;

    &--item {
      margin-bottom: 5rem;

      @media (prefers-reduced-motion: no-preference) {
        .react-logo {
          animation: spin infinite 20s linear;
        }
      }
    }

    &.courses {
      list-style-type: disc;
    }
  }
}
.dot {
  animation: ellipsisFade 10s ease infinite;

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