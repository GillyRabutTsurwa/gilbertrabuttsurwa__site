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

// TESTING: using bash scripting. testing script. let's try this again... and again.....
