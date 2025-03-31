<template>
  <div class="navigation">
    <input type="checkbox" name="navigo" class="navigation__checkbox" id="navi-toggle">
    <label for="navi-toggle" class="navigation__button">
      <span class="navigation__icon">&nbsp;</span>
    </label>
    <div class="navigation__background">&nbsp;</div>
    <nav class="navigation__nav">
      <ul class="navigation__list">
        <li class="navigation__item">
          <NuxtLink to="/blog" class="navigation__link">Blog</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/projects" class="navigation__link">Projects</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="/shop" class="navigation__link">Shop</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="https://github.com/GillyRabutTsurwa" class="navigation__link">Github</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="https://instagram.com/rabuttsurwa96" class="navigation__link">Instagram</NuxtLink>
        </li>
        <li class="navigation__item">
          <NuxtLink to="https://linkedin.com/in/gilberttsurwa" class="navigation__link">LinkedIn</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>


<style lang="scss" scoped>
.navigation {
  z-index: 100000;

  &__checkbox {
    // Hide actual checkbox
    display: none;
  }

  &__button {
    background-color: $colour-secondary;
    height: 7rem;
    width: 7rem;
    position: fixed;
    top: 3rem;
    right: 3rem;
    border-radius: 50%;
    z-index: 20000;
    -webkit-box-shadow: 0 1rem 3rem rgba($colour-noir, 0.1);
    box-shadow: 0 1rem 3rem rgba($colour-noir, 0.1);
    text-align: center;
    cursor: pointer;

    // @include responsive(tablet-portrait) {
    //     top: 4rem;
    //     right: 4rem;
    // }
  }

  /*
    This is the background that starts as the size of the button, but using scale()
    we will expand it to be size of the entire screen
*/

  &__background {
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    position: fixed;
    top: 3.5rem;
    right: 3.5rem;
    // background-image: radial-gradient($colour-primary, $steelblue);
    background-image: radial-gradient($colour-secondary, $colour-secondary);

    z-index: 10000;
    -webkit-transition: -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transition: -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
    transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

    // @include responsive(tablet-portrait) {
    //     top: 4.5rem;
    //     right: 4.5rem;
    // }
  }

  // When the background of the navigation is showing when clicked on the button
  // This navigation will also appear in the middle of the screen on top of the
  // background
  &__nav {
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 15000;

    opacity: 0;
    width: 0;
    -webkit-transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  // The navigation list that is centred on the navigation to appear directly in the middle
  // of the webpage
  &__list {
    position: absolute;
    @include relative-absolute-centre-elements;
    list-style: none;
    text-align: center;
    width: 100%;
  }

  &__item {
    margin: 1rem;
  }

  &__link {
    &:link,
    &:visited {
      display: inline-block;
      font-size: 3rem;
      font-weight: 300;
      padding: 1rem 2rem;
      color: $colour-primary;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, $colour-primary 50%);
      background-size: 225%;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;

      span {
        margin-right: 1rem;
        display: inline-block;
      }
    }

    &:hover,
    &:active {
      background-position: 100%;
      color: $colour-secondary;
      -webkit-transform: translateX(1rem);
      transform: translateX(1rem);
    }
  }

  // FUNCTIONALITY
  &__checkbox:checked ~ &__background {
    -webkit-transform: scale(80);
    transform: scale(80);
  }

  &__checkbox:checked ~ &__nav {
    opacity: 1;
    width: 100%;
  }

  // Hamburger to X ICON
  &__icon {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      display: inline-block;
      width: 3rem;
      height: 2px;
      background-color: $colour-gris-supersombre;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      -webkit-transition: all 0.2s;
      transition: all 0.2s;
    }

    &::before {
      top: -0.8rem;
    }

    &::after {
      top: 0.8rem;
    }
  }

  &__button:hover &__icon::before {
    top: -1rem;
  }

  &__button:hover &__icon::after {
    top: 1rem;
  }

  &__checkbox:checked + &__button &__icon {
    background-color: transparent;
  }

  &__checkbox:checked + &__button &__icon::before {
    top: 0;
    -webkit-transform: rotate(225deg);
    transform: rotate(225deg);
  }

  &__checkbox:checked + &__button &__icon::after {
    top: 0;
    -webkit-transform: rotate(-225deg);
    transform: rotate(-225deg);
  }
}
</style>