<script setup>
import { useCartStore } from '~/stores/cart';
import { useProductsStore } from '~/stores/products';

const productsStore = useProductsStore();
const cartStore = useCartStore();

const itemsInCart = computed(() => {
  return productsStore.productsInCart.length
});
</script>

<template>
    <Navigation>
        <template #logo>
            <LogoX/>
        </template>
        <template #links>
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
        </template>
        <template #account>
            <li class="navigation__list--item">
                <button @click=cartStore.toggleCartStatus class="cart-btn">
                    <span class="nav-icon"><i class="fas fa-cart-plus" /></span>
                    <div class="cart-items">{{ itemsInCart }}</div>
                </button>
            </li>
        </template>
    </Navigation>
    <ShopHeader />
    <Cart />
    <Products />
    <Footer />
</template>

<style lang="scss" scoped>
.nav-icon {
  width: 8rem;
  height: 8rem;
  color: $colour-secondary;
}

.nav-icon img {
  width: 100%;
  height: 100%;
}

.cart-btn {
  all: unset;
  /* NOTE: to get rid of all custom button properties */
  display: block;
  position: relative;
  cursor: pointer;
}

.cart-items {
  /* cette element est positione relativement a lequel ? */
  position: absolute;
  top: -1.1rem;
  right: -1.3rem;
  background-color: $colour-primary;
  padding: 0 0.5rem;
  border-radius: 30%;
  color: $colour-secondary;
  font-size: 1.25rem;
}
</style>