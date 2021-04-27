<template>
  <main>
    <section class="topWrapper">
      <img alt="top image" src="@/assets/topImage.jpeg" />
    </section>

    <section class="products">
      <article class="products-heading">
        <h1>We design delicious</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam <br />
          nonummy tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
      </article>
      <div class="products-container">
        <div v-for="product in list" :key="product.id" class="products-product">
          <li v-for="image in product.images" :key="image.index">
            <img :src="image" />
          </li>
          <div class="products-info">
            <span>{{ product.name }}</span>
            <span>USD : {{ product.price }}</span>
            <span>{{ product.description }}</span>
          </div>
          <btn @click="changeHandler">
            add cart
          </btn>
        </div>
      </div>
    </section>
    <!-- <div>Busy: {{ busy }}</div>
    <btn @click="changeHandler">
      asddsfsdfsdfsdfsdf
    </btn> -->

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </main>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import useProducts from "@/modules/products";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Btn from "@/components/atoms/Btn.vue";
import "hooper/dist/hooper.css";

export default defineComponent({
  components: {
    Btn,
  },

  setup() {
    const products = useProducts();

    const list = computed(() => products.state.list);
    const busy = computed(() => products.state.busy);

    const changeHandler = () => {
      products.mutations.setBusy(!products.state.busy);

      // products.mutations.setList();
    };

    products.actions.load();

    return {
      list,
      busy,
      changeHandler,
    };
  },
});
</script>

<style lang="scss" scoped>
.topWrapper {
  width: 100%;
  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    overflow: hidden;
  }
}

.products {
  width: 100%;

  &-heading {
    width: 80%;
    margin: 0 auto;
    padding-top: 60px;

    h1 {
      font-size: 34px;
    }
  }

  &-container {
    width: 60%;
    margin: 0 auto;
    padding: 60px;
    display: flex;
    justify-content: space-between;
  }

  &-product {
    width: 30%;

    li {
      list-style: none;
    }

    img {
      width: 80%;
      height: 14vw;
      border-radius: 180px;
    }
  }

  &-info {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>
