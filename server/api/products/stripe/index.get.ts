import Stripe from "stripe";
import { fetchProducts } from "../sanity/index.get";
import type { Product } from "~/interfaces/product";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../sanity/index.get";

const config = useRuntimeConfig();
const stripe = new Stripe(config.stripe.key, {
    apiVersion: "2024-06-20",
});

const urlFor = (source: any) => builder.image(source);
const builder = imageUrlBuilder(client);

export default defineEventHandler(async () => {
    const sanityProducts: Promise<Product[]> = fetchProducts();
    const products = await sanityProducts;
    products.forEach(async (currentProduct: Product, _, arr: Array<Product>) => {
        const productIDs = arr.map((currentProduct: Product) => currentProduct._id);
        const str = currentProduct.mainImage.asset._ref;
        const { baseUrl, projectId, dataset, source } = urlFor(str).options;

        if (productIDs.includes(currentProduct._id)) return;

        await stripe.products.create({
            id: currentProduct._id, //NOTE: using ID that comes from Sanity instead of Stripe's default product ID to keep things consistent
            name: currentProduct.name,
            description: currentProduct.description.toString(),
            default_price_data: {
                unit_amount: currentProduct.price,
                currency: currentProduct.currency,
            },
            images: [`${baseUrl}/images/${projectId}/${dataset}/${str.slice(6, str.length - 4)}.jpg`],
            url: `${config.public.client_url}/shop`, //NOTE: ça changera
        });
        // return products; NOTE: j'en ai pas besoin en ce moment
    });
    // return sanityProducts; NOTE: ni ceci
});
