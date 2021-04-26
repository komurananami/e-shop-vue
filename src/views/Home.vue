<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div>Busy: {{ busy }}</div>
    <btn @click="changeHandler">
      asddsfsdfsdfsdfsdf
    </btn>

    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import useProducts from "@/modules/products";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Btn from "@/components/atoms/Btn.vue";

export default defineComponent({
  components: {
    HelloWorld,
    Btn,
  },

  setup() {
    const products = useProducts();

    const busy = computed(() => products.state.busy);

    const changeHandler = () => {
      products.mutations.setBusy(!products.state.busy);
    };

    products.actions.load();

    return {
      busy,
      changeHandler,
    };
  },
});
</script>
