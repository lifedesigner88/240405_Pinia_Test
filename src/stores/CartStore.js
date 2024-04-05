import {defineStore} from "pinia";

export default defineStore("CartStore", {
    state: () => {
        return {
            items: [],
        };
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count);
            for (let i = 0; i < count; i++) {
                this.items.push({ ...item });
            }
        },

    }
})