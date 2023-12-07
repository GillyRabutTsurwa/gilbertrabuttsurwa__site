import Stripe from "stripe";
import imageUrlBuilder from "@sanity/image-url";
import { client, fetchProducts } from "../products/index.get";

const config = useRuntimeConfig();

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

const stripe = new Stripe(config.stripe.key, {
    apiVersion: "2022-11-15",
});

export default defineEventHandler(async (event) => {
    const body = await readBody(event); // data coming from frontend. not using a form but it's still easy
    console.log(body);

    const products = await fetchProducts();
    console.log("---------");
    console.log(products);

    const lineItems = body.items.map((currentItem: any) => {
        const storeItem = products.find((currentProduct: any) => currentProduct._id === currentItem.id);
        const str = storeItem.mainImage.asset._ref;
        const { baseUrl, projectId, dataset, source } = urlFor(str).options;
        return {
            price_data: {
                currency: "usd",
                product_data: {
                    name: storeItem.name,
                    images: [`${baseUrl}/images/${projectId}/${dataset}/${str.slice(6, str.length - 4)}.jpg`],
                },
                unit_amount: storeItem.price,
            },
            quantity: currentItem.quantity,
        };
    });

    console.log(lineItems);

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: lineItems,
            success_url: `${config.public.client_url}/success`,
            cancel_url: `${config.public.client_url}/shop`,
            locale: "en",
            shipping_address_collection: {
                allowed_countries: ["US"],
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 0,
                            currency: "usd",
                        },
                        display_name: "Free shipping",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 5,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 7,
                            },
                        },
                    },
                },
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 1500,
                            currency: "usd",
                        },
                        display_name: "Next day air",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 1,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 1,
                            },
                        },
                    },
                },
            ],
        });
        console.log(session.url);
        return {
            url: session.url,
        };
    } catch (err) {
        console.error(err);
    }
});
