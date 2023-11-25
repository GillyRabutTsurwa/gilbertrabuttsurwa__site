import { defineStore } from "pinia";

type cartState = {
    cartStatus: boolean;
};

export const useCartStore = defineStore("cart", {
    state: (): cartState => {
        return {
            cartStatus: false,
        };
    },
    actions: {
        cartOpen() {
            this.cartStatus = true;
        },
        cartClose() {
            this.cartStatus = false;
        },
        toggleCartStatus() {
            this.cartStatus ? (this.cartStatus = false) : (this.cartStatus = true);
        },
    },
});
