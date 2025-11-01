<script setup lang="ts">
const isLoggedIn: Ref<boolean> = ref(false);
// const supabase = useSupabaseClient();
// const user = useSupabaseUser();
// const route = useRoute();
// const router = useRouter();

// const signOut = async () => {
//   try {
//     const { error } = await supabase.auth.signOut();
//     if (error) throw new Error(error.message);
//     if (route.path === "/blog/uncensored") router.push("/login");
//   } catch (error) {
//   }
// }
</script>

<template>
  <nav class="navigation">
    <slot name="logo"></slot>
    <ul class="navigation__list">
      <slot name="links"></slot>
      <!-- <li class="navigation__list--item">
        <NuxtLink to="/contact">Contact Me</NuxtLink>
      </li> -->
    </ul>
    <ul class="navigation__list">
      <slot name="account"></slot>
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

<style lang="scss">
.navigation {
  @extend %flex-basic;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  //@todo - enquêter pourquoi ça ne marche pas sans "!important"
  padding: 1.5rem 4rem !important;
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
      
      a {
        margin-right: 3.25rem;

        &,
        &:link,
        &:visited {
          font-size: 1.75rem;
          text-decoration: none;
          color: $colour-secondary;
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
          color: $colour-secondary;
        }
      }
    }
  }
}
</style>
