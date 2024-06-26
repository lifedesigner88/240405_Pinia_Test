import {defineStore} from "pinia";
import {groupBy} from "lodash";
import useAuthUserStore from "@/stores/AuthUserStore";
import {useLocalStorage} from "@vueuse/core";

export default defineStore("CartStore", {
    state: () => {
        return {
            items: useLocalStorage("CartStore:items",[]),
        };
    },

    getters: {
        count: state => state.items.length,
        isEmpty: state => state.count === 0,
        grouped: state => {
            const grouped = groupBy(state.items, item => item.name);
            const sorted = Object.keys(grouped).sort();
            let inOrder = {};
            sorted.forEach((key) => inOrder[key] = grouped[key]);
            return inOrder;
        },

        groupCount: state =>
            (name) => state.grouped[name].length,
        totalPrice: state=>
            state.items.reduce((sum, item) => sum + item.price, 0),
    },

    actions: {

        checkout() {
            const authUserStore = useAuthUserStore();
            alert(`${authUserStore.username} just bought ${this.count} items at a totla of $${this.totalPrice} `);
        },

        addItems(count, item) {
            count = parseInt(count);
            for (let i = 0; i < count; i++) {
                this.items.push({...item});
            }
        },
        deleteItems(name){
            this.items = this.items.filter(item => item.name !== name);
        },
        updateCount(count, item){
            this.deleteItems(item.name);
            this.addItems(count, item);
        }
    }
})