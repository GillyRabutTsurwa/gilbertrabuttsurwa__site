<script setup lang="ts">
const { data: user } = await useFetch("/api/session");
console.log(user.value);
const { status, signIn, signOut } = useAuth();
const route = useRoute();
const logOut = async () => {
  console.log("Logout Settings");
}
const isLoggedIn = computed(() => status.value === "authenticated");



</script>

<template>
  <nav class="navigation">
    <LogoX />
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <NuxtLink to="/blog/personal/posts">Blogs</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/blog/authours/gilbert-rabut-tsurwa">About Me</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink :to="`/blog/${$route.name === 'tech' ? 'personal' : 'tech'}`">
          {{ $route.name === 'tech' ? 'Personal' : 'Tech' }} Page
        </NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/blog/uncensored">Uncensored Posts</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/shop" target="_blank" rel="noreferrer noopener">Shop</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/contact">Contact Me</NuxtLink>
      </li>
    </ul>
    <ul class="navigation__list">
      <!-- account username -->
      <li v-if="isLoggedIn" class="navigation__list--item">
        <span class="username">{{ user.user.name || user.user.email }}</span>
      </li>
      <li v-if="isLoggedIn" class="navigation__list--item">
        <span @click="signOut" style="color: #fefefe;">Sign Out</span>
      </li>
      <li v-else class="navigation__list--item">
        <NuxtLink to="/login">Sign In</NuxtLink>
      </li>

    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "~/assets/sass/abstracts/" as abstracts;

.navigation {
  @extend %flex-basic;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #f0f0f0;
  padding: 0 1.75rem;
  background-color: abstracts.$colour-primary;

  @include abstracts.breakpoint(480) {
    height: 17.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &>*:not(:first-child) {
      margin-top: 1.25rem;
    }
  }

  .logo {
    font-size: 2.5rem;
    font-weight: 500;
    color: abstracts.$text-grey-light;
    // font-family: abstracts.$Josefin;
    letter-spacing: 1.5px;
  }

  &__list,
  &__icons {
    list-style: none;
    @extend %flex-basic;
  }

  &__list {
    font-family: "Abel", cursive;
    font-size: 1.6rem;

    &--item {
      margin-right: 3.25rem;

      a {

        &,
        &:link,
        &:visited {
          font-size: 1.75rem;
          text-decoration: none;
          color: abstracts.$whitish;
        }

        &:hover,
        &:active {
          font-weight: bold;
        }
      }

      .username {
        font-size: 1.8rem;
        color: #fefefe;
      }
    }
  }

  &__icons {
    font-size: 1.6rem;

    &--icon {
      margin-right: 2rem;

      a {

        &:link,
        &:visited {
          text-decoration: none;
          color: abstracts.$whitish;
        }
      }
    }
  }
}
</style>
