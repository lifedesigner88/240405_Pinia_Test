import {defineStore} from "pinia";

export default defineStore("ProductStore", {
    state: () => {
        return {
            products: []
        }
    },

    actions: {
        async fill() {
            this.products = (await import("@/data/products.json")).default;
        }
    }

    // getters
})