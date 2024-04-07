<script>
// imports
import {defineComponent} from "vue";
import CartWidget from "@/components/CartWidget.vue";
import useAuthUserStore from "@/stores/AuthUserStore";
import {mapState} from "pinia";
// import {mapWritableState} from "pinia";


export default defineComponent({
  components: {CartWidget},
  computed: {
    ...mapState(useAuthUserStore, {
      user : (store) => `hello ${store.username}`
    }),
    // ...mapWritableState(useAuthUserStore, {
    //   user : "username"
    // }),
  }
})

</script>

<template>
  <header
      class="flex justify-between p-6 mb-10 items-center"
      style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl text-gray-700 font-bold">The Pineapple Stand</h1>

    <div>
<!--      <input v-model="user" type="text">-->
      <span>{{ user }}</span>
    <CartWidget class="inline-block"/>
    </div>

  </header>
</template>