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

// TESTING: now using production remote to push to netlify.. still don't know if it worked......
//NOTE: things seem to work well now. it's been a while though. testing. we bak
