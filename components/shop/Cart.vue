<script setup>
import { useCartStore } from "~/stores/cart";
import { useProductsStore } from "~/stores/products";

// @todo: Come up with a more imaginative greeting

const cartStore = useCartStore();
const productsStore = useProductsStore();

const isCartOpen = ref(null);

const productsInCartUI = computed(() => {
  // NOTE: on fait ceci car on veut que un article qui est selectioné plusieurs fois s'affiche juste une fois sur la carte
  return [...new Set(productsStore.productsInCart)];
});

/** NOTETESTING
 * taking our computed property above
 * and extracting the id,
 * whilst generating it's respectable quantity (look at products.js store file)
 * this will give us a certain item via its id and the quantity of the selected item
 */
const cartItems = computed(() => {
  return productsInCartUI.value.map((currentProduct) => {
    return {
      id: currentProduct._id,
      quantity: productsStore.getOccurence(currentProduct),
    };
  });
});

const totalPricesArr = computed(() => {
  return productsStore.productsInCart.map((currentProduct) => currentProduct.price);
});

const sum = computed(() => {
  return totalPricesArr.value.reduce((accumulator, currentValue) => accumulator + currentValue, 0).toFixed(2);
});

cartStore.$subscribe((_, state) => {
  // NOTE: not using the mutation parametre so using _, as the order and placements of the function's arguments matters

  isCartOpen.value = state.cartStatus;
});

//  @todo: Test For Action

const clearCart = () => {
  if (productsStore.productsInCart !== 0) productsStore.$patch({ productsInCart: [] });
};

// @todo: Come up with ANOTHER a more imaginative greeting
// Everyone uses hello world and it's boring.
// trying to create a new issue, WITH labels
// labels: enhancement, help wanted, testing

// NOTE: this is code straight from stores/products.js but copying it just to get it to work

const stripeCheckout = async () => {
  if (cartItems.value.length === 0) return; //NOTE: si le panier est vide, don't make a post request to the server
  const { data } = await useFetch("/api/checkout", {
    method: "POST",
    body: {
      items: cartItems.value,
    },
  });
  await navigateTo(data.value.url, {
    external: true, //NOTE: on en a besoin pour pouvoir naviguer à un url externe
  }); // equivalent effect as window.location = url
};
</script>

<template>
  <!-- <div @click.self="cartStore.toggleCartStatus" v-if="isCartOpen" class="cart-overlay"> -->
  <div :class="{ show: cartStore.cartStatus }" class="cart">
    <span class="close-cart" @click="cartStore.toggleCartStatus">
      <i class="fas fa-window-close" />
    </span>
    <h2>Your cart</h2>
    <div class="cart-content">
      <CartItem v-for="(currentProduct, index) in productsInCartUI" :key="index" :cartItemProp="currentProduct" />
      <h5 v-if="!productsInCartUI.length" style="text-align:center;">Your Cart is Empty</h5>
    </div>
    <div class="cart-footer">
      <h3>Your total : $ <span class="cart-total">{{ (sum / 100).toFixed(2) }}</span></h3>
      <div class="buttons">
        <Button @click="clearCart" text="Clear Cart" colourPrimary="#101d2c" colourSecondary="#e6b376" />
        <Button @click="stripeCheckout" text="Checkout" colourPrimary="#101d2c" colourSecondary="#e6b376" />
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped lang="scss">
// .show {
//   transform: translateX(0vw);
// }

.cart {
  position: fixed;
  top: 0;
  right: 0;
  width: 30vw;
  height: 100%;
  overflow: scroll;
  z-index: 1000;
  background-color: rgb(255, 219, 183);
  padding: 1.5rem;
  transform: translateX(30vw);
  transition: transform 0.5s ease;

  &.show {
    transform: translateX(0vw);
  }

  @include breakpoint(767) {
    width: 100vw;
    transform: translateX(100vw);
  }

}

.close-cart {
  font-size: 1.7rem;
  cursor: pointer;
  color: $colour-primary;
}

.cart h2 {
  text-transform: capitalize;
  text-align: center;
  letter-spacing: 0.1rem;
  margin-bottom: 2rem;
}

.cart-footer {
  margin-top: 2rem;
  letter-spacing: 0.1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cart-footer h3 {
  text-transform: capitalize;
  margin-bottom: 1rem;
}

.buttons {
  position: absolute; //NOTE: on peut le faire car la position (cart) du parent est defini (sticky)
  bottom: 2rem;

  & > * {
    margin: 1.5rem;
  }
}
</style>

<!-- NOTE: forgot to make the commit as a release in the feature branch. hence this comment -->