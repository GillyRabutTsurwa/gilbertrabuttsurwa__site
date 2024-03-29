<script setup lang="ts">
import type { StateTree, Store } from "pinia";
import { useProductsStore } from "~/stores/products";
import type { Product } from "~/interfaces/product";

interface Props {
  product: Product
}

const store: Store<"products", StateTree> = useProductsStore();
const props = defineProps<Props>();

const addItemToCart = () => {
  store.$patch((state) => {
    console.log(props.product);
    state.productsInCart = [props.product, ...state.productsInCart];
  });
};
</script>

<template>
  <article class="product">
    <div class="img-container">
      <SanityImage :asset-id="props.product.mainImage.asset._ref" class="product-image" auto="format" />
      <button @click="addItemToCart" class="bag-btn" data-id="1">
        <i class="fas fa-shopping-cart" aria-hidden="true" />
        Add To Bag
      </button>
    </div>
    <h3>{{ props.product.name }}</h3>
    <h4>${{ (props.product.price / 100).toFixed(2) }}</h4>
  </article>
</template>

<style lang="scss" scoped>
.img-container {
  position: relative;
  overflow: hidden;
}

.img-container:hover .bag-btn {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.img-container:hover .product-image {
  opacity: 0.5;
}

.product-image {
  display: block;
  width: 100%;
  min-height: 18rem;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
}

.bag-btn {
  position: absolute;
  top: 70%;
  right: 0;
  background-color: $colour-primary;
  border: none;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  letter-spacing: 0.1rem;
  font-weight: bold;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  -webkit-transform: translateX(101%);
  transform: translateX(101%);
  /*POURQUOI 101%?*/
  cursor: pointer;
  color: $whitish;
}

.bag-btn:hover {
  background-color: $whitish;
  color: $colour-primary;
}

.fa-shopping-cart {
  margin-right: 0.5rem;
}

.product h3 {
  text-transform: capitalize;
  font-size: 1.1rem;
  margin-top: 1rem;
  letter-spacing: 0.1rem;
  text-align: center;
}

.product h4 {
  margin-top: 0.7rem;
  letter-spacing: 0.1rem;
  color: var(--primaryColor);
  text-align: center;
}
</style>