import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    state: () => {
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

// TESTING: if action has worked, this code will be pushed to the github in 2 minutes (test settings leseeee)
