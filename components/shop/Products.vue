<script setup lang="ts">
import groq from 'groq';
import Stripe from "stripe";
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { StateTree, Store } from 'pinia';
import type { Product } from "~/interfaces/product";
import { useProductsStore } from '@/stores/products';

const config = useRuntimeConfig();

const stripe: Stripe = new Stripe(config?.stripe?.key, {
  apiVersion: "2022-11-15",
});

// const { data: client } = await useFetch("/api/sanity"); NOTE: not quite working
const client = createClient({
  projectId: config.public.sanity.projectId,
  dataset: "production",
  apiVersion: "2022-01-12",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

const query: string = groq`*[_type == "product"]`;
const { data: products } = await useSanityQuery(query);

const store: Store<"products", StateTree> = useProductsStore();
store.products = products.value;

store.products.forEach(async (currentProduct: Product) => {
  const duplicateProduct = await stripe.products.retrieve(currentProduct._id);
  if (duplicateProduct) return;
  const str = currentProduct.mainImage.asset._ref;
  const { baseUrl, projectId, dataset, source } = urlFor(str).options;
  await stripe.products.create({
    id: currentProduct._id, //NOTE: using ID that comes from Sanity instead of Stripe's default product ID to keep things consistent
    name: currentProduct.name,
    description: currentProduct.description.toString(),
    default_price_data: {
      unit_amount: currentProduct.price,
      currency: currentProduct.currency
    },
    images: [`${baseUrl}/images/${projectId}/${dataset}/${str.slice(6, str.length - 4)}.jpg`],
    url: `${config.public.client_url}/shop` //NOTE: ça changera
  });
  return products;
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
