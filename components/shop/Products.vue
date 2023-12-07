<script setup lang="ts">
import groq from 'groq';
import Stripe from "stripe";
import type { StateTree, Store } from 'pinia';
import type { Product } from "~/interfaces/product";
import { useProductsStore } from '@/stores/products';

const config = useRuntimeConfig();

const stripe: Stripe = new Stripe(config?.stripe?.key, {
  apiVersion: "2022-11-15",
});
const query = groq`*[_type == "product"]`;
const { data: products } = await useSanityQuery(query);

// NOTE: consult pages/blog/personal/posts/index.vue for a detailed explanation of this one line of code below
const store: Store<"products", StateTree> = useProductsStore();
store.products = products.value;

store.products.forEach(async (currentProduct: Product) => {
  const products = await stripe.products.create({
    name: currentProduct.name
  });
  console.log(products);
});
</script>

<template>
  <section class="products">
    <h2 class="section-title">Our Products</h2>
    <div class="products-centre">
      <Product v-for="(currentProduct, index) in store.products" :key="index" :product="currentProduct" />
    </div>
  </section>
</template>

<style scoped>
.products {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 5rem;
  text-transform: capitalize;
  letter-spacing: 0.1rem;
}

.products-centre {
  width: 90vw;
  margin: 0 auto;
  max-width: 117rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  grid-row-gap: 2rem;
  grid-column-gap: 1.5rem;
}
</style>
