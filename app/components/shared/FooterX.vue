<script setup lang="ts">
const currentYear: ComputedRef<number> = computed(() => {
  return new Date().getFullYear();
});
</script>

<template>
  <footer class="footer dark">
    <ul class="links-footer__other-sites">
      <h4 class="links-footer__subtitle">Other Sites</h4>
      <li class="links-footer--item phone">
        <NuxtLink to="https://gilbertrabuttsurwa.tech" target="_blank">
          Main Site
        </NuxtLink>
      </li>
      <li class="links-footer--item email">
        <NuxtLink to="https://gilbertrabuttsurwa-shop.netlify.app" target="_blank">
          <span>Shop</span>
        </NuxtLink>
      </li>

    </ul>
    <ul class="links-footer__contact">
      <h4 class="links-footer__subtitle">Contact Me</h4>
      <li class="links-footer--item phone">
        <NuxtLink to="tel:+5408002584" external>
          <span>540-800-2584</span>
        </NuxtLink>
      </li>
      <li class="links-footer--item email">
        <NuxtLink to="mailto:tsurwagilbert@gmail.com">
          <span>tsurwagilbert@gmail.com</span>
        </NuxtLink>
      </li>

    </ul>
    <div class="links-footer__logo">
      <LogoFooter />
    </div>
    <ul class="links-footer__follow">
      <h4 class="links-footer__subtitle">Links</h4>
      <li class="links-footer--item">
        <NuxtLink to="/blog">Blog</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/blog/uncensored">Uncensored</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/blog/authours/gilbert-rabut-tsurwa" target="_blank">About Me</NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="/projects">Projects</NuxtLink>
      </li>
    </ul>
    <ul class="links-footer__socials">
      <h4 class="links-footer__subtitle">Socials</h4>
      <li class="links-footer--item">
        <NuxtLink to="https://www.linkedin.com/in/gilberttsurwa" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://www.linkedin.com/in/gilberttsurwa" target="_blank">
          <i class="fab fa-instagram"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://www.github.com/GillyRabutTsurwa" target="_blank">
          <i class="fab fa-github"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://www.linkedin.com/in/gilberttsurwa" target="_blank">
          <i class="fab fa-spotify"></i>
        </NuxtLink>
      </li>
      <li class="links-footer--item">
        <NuxtLink to="https://www.linkedin.com/in/gilberttsurwa" target="_blank">
          <i class="fab fa-linkedin"></i>
        </NuxtLink>
      </li>
    </ul>
    <h3 class="copyright">Copyright &copy; Gilbert Rabut Tsurwa {{ currentYear }}. All Rights Reserved</h3>
    <!-- <div class="below-footer">
            <p>Powered via <img src="~/assets/svg/nuxt-logo.svg" alt="" class="nuxt"> &
                <img src="~/assets/svg/sanity-logo.svg" alt="" class="sanity" /> &#124; <span class="hosted-on">Hosted
                    on</span> <img src="~/assets/svg/netlify-logo.svg" alt="" class="netlify" />
            </p>
        </div> -->
  </footer>
</template>


<style lang="scss" scoped>
.footer {
  order: 7; //NOTE: can be a grid item
  position: relative;
  width: 100%;
  // height: 60rem;
  // height: 45rem;
  padding: 20rem 10rem;
  // padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  // grid-template-rows: repeat(2, 1fr) 10rem;
  grid-template-rows: 1fr 10rem;

  place-items: center;
  // align-content: center;
  row-gap: 2.5rem;
  // background-color: #104f55;
  background-color: #1a2934;
  color: #fefefe;

  @include breakpoint(480) {
    display: flex;
    flex-direction: column;

    & > *:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  .logo {
    // width: 15rem;
    width: 20rem;
    height: 20rem;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end; // mais il (le logo) est toujours hors de centre
    position: relative; //NOTE: voici la solution
    left: 20%;

    background-color: transparent;

    img {
      height: 100%;
    }
  }

  .links-footer {
    &__subtitle {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    &__other-sites,
    &__contact,
    &__logo,
    &__follow,
    &__socials {
      grid-row: 2 / 3;
      text-align: center;
      // align-self: center;

      a {
        &,
        &:link,
        &:visited {
          color: unset;
          text-decoration: none;
          transition: all 0.2s;
          display: inline-block; //NOTE: sans celui-ci, la rotation n'est pas possible
        }

        &:hover,
        &:active {
          // color: $colour-primary;
          color: #fefefe;
          -webkit-box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          box-shadow: 0 1rem 2rem rgb(0 0 0 / 40%);
          -webkit-transform: rotate(5deg);
          transform: rotate(5deg);
        }
      }
    }

    &__other-sites {
      grid-column: 1 / 2;
      text-align: center;
    }

    &__contact {
      grid-column: 2 / 3;
      display: flex;
      flex-direction: column;

      //@todo: adjust css code to be cleaner later
      & > *:not(:last-child) {
        margin-bottom: 1rem;
      }
    }

    &__logo {
      grid-column: 3 / 4;

      //NOTE: for removing hover effect on logo link
      a {
        &:hover,
        &:active {
          -webkit-transform: none;
          transform: none;
          box-shadow: none;
        }
      }
    }

    &__follow {
      grid-column: 4 / 5;
    }

    &__socials {
      grid-column: 5 / 6;
      list-style: none;
      // display: grid;
      // grid-template-columns: repeat(2, max-content);
    }

    &--item:not(.socials) {
      margin-right: 1.5rem;
      color: #fff;
      text-decoration: none;
      // text-transform: uppercase;
      display: inline-block;

      // -webkit-transition: all 0.2s;
      // transition: all 0.2s;
      &.phone {
        img {
          height: 1.5rem;
          margin-right: 1rem;
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }
      }

      // @todo: refactor later
      &.email {
        img {
          height: 1.5rem;
          margin-right: 1rem;
          filter: invert(23%) sepia(80%) saturate(2901%) hue-rotate(355deg) brightness(101%) contrast(81%);
        }
      }
    }
  }

  .copyright {
    grid-row: 3 / 4;
    grid-column: 2 / 3; //NOTE: 3 / 4 est aussi bien
    text-align: center;
  }
}

.below-footer {
  position: absolute; // parent is .footer
  bottom: 0;
  grid-column: 1 / -1;
  grid-row: 4 / 5;
  width: 100%;
  background-color: #111;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1.5rem 0;

  p {
    margin: 0 auto;
    font-size: 2rem;

    .hosted-on {
      margin-left: 1.5rem;
    }

    img {
      height: 2rem;
      margin: 0 1rem;
    }

    .nuxt {
      height: 3rem;
      // width: 4rem;
      // font-size: 4rem;
      position: relative;
      top: 0.5rem;
    }

    .sanity {
      position: relative;
      top: 0.125rem;
    }

    .netlify {
      position: relative;
      height: 3rem;
      top: 0.5rem;
    }
  }
}
</style>