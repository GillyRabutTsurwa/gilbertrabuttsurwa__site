<script setup lang="ts">
const isLoggedIn: Ref<boolean> = ref(false);
// const supabase = useSupabaseClient();
// const user = useSupabaseUser();
// const route = useRoute();
// const router = useRouter();
// console.log(user);

// const signOut = async () => {
//   try {
//     const { error } = await supabase.auth.signOut();
//     if (error) throw new Error(error.message);
//     if (route.path === "/blog/uncensored") router.push("/login");
//   } catch (error) {
//     console.log(error);
//   }
// }
</script>

<template>
  <nav class="navigation">
    <LogoX />
    <ul class="navigation__list">
      <li class="navigation__list--item">
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/blog">Blogs</NuxtLink>
      </li>
      <li class="navigation__list--item">
        <NuxtLink to="/blog/authours/gilbert-rabut-tsurwa">About Me</NuxtLink>
      </li>
      <DevOnly>
        <li class="navigation__list--item">
          <NuxtLink to="/blog/uncensored">Uncensored Posts</NuxtLink>
        </li>
      </DevOnly>
      <li class="navigation__list--item">
        <NuxtLink to="/shop" target="_blank" rel="noreferrer noopener">Shop</NuxtLink>
      </li>
      <!-- <li class="navigation__list--item">
        <NuxtLink to="/contact">Contact Me</NuxtLink>
      </li> -->
    </ul>
    <ul class="navigation__list">
      <!-- account username -->

      <!-- <li v-if="user?.role === 'authenticated'" class="navigation__list--item">
        <span @click="signOut" style="color: #f0f0f0;">Sign Out</span>
      </li>
      <li v-if="user?.role === 'authenticated'" class="navigation__list--item">
        <span style="color: #f0f0f0;">{{ user?.user_metadata.user_name || user.email }}</span>
      </li> -->
      <!-- <li v-else class="navigation__list--item">
        <NuxtLink to="/login">Sign In</NuxtLink>
      </li> -->
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
  @extend %flex-basic;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  background-color: #f0f0f0;
  padding: 0 1.75rem;
  background-color: $colour-primary;
  margin-bottom: 2.5rem;

  @include breakpoint(480) {
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
    color: $text-grey-light;
    // font-family: $Josefin;
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
          color: $whitish;
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
          color: $whitish;
        }
      }
    }
  }
}
</style>
