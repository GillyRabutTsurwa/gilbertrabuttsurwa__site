<template>
  <ul class="credentials__list learning">
    <li class="credentials__list--item">
      <i class="devicon-mongodb-plain" />
      Mongo DB
    </li>
    <li class="credentials__list--item">
      <i class="devicon-express-original" />
      Express
    </li>
    <li class="credentials__list--item">
      <i class="devicon-react-plain react-logo" />
      React
    </li>
    <li class="credentials__list--item">
      <i class="devicon-nodejs-plain" />
      Node
    </li>
    <li class="credentials__list--item">
      <i class="devicon-typescript-plain" />
      TypeScript
    </li>
    <li class="credentials__list--item">
      <i class="devicon-bash-plain" />
      Bash Scripts
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.credentials {
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
</style>
