import { reactive, readonly } from "vue";
// import axios from "axios";

// ------------ Interfaces
export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  description: string;
  images: string[];
}

export interface ProductsState {
  list: Product[];
  busy: boolean;
}

// ----------- State
const state: ProductsState = reactive({
  list: [],
  busy: false,
});

// ----------- Mutations - Execute some logic and change the state
const mutations = {
  setBusy(newBusy: boolean) {
    state.busy = newBusy;
  },
};

// ----------- Actions - Make requests outside
const actions = {
  async load() {
    // const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0");
    // console.log(res.data);
  },
};

export default function useProducts() {
  return readonly({
    state,
    mutations,
    actions,
  });
}
