import { defineStore } from "pinia";
import type { Product } from "~~/interfaces/product";

interface State {
    products: Array<Product>;
    productsInCart: Array<Product>;
}

export const useProductsStore = defineStore("products", {
    state: (): State => {
        return {
            products: [],
            productsInCart: [],
        };
    },
    getters: {
        getOccurence: (state): Function => {
            return (value: Product) => state.productsInCart.filter((currentObj) => currentObj === value).length;
        },
    },
});
