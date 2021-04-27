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
  list: [
    {
      id: 1,
      name: "Croissant",
      price: 2,
      stock: 20,
      description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
      images: [
        "https://media.istockphoto.com/photos/breakfast-with-croissants-coffee-orange-juice-and-berries-picture-id1001971972?s=612x612",
        // "https://media.istockphoto.com/photos/french-boulangerie-fresh-croissant-for-sale-picture-id629455902?s=612x612",
      ],
    },
    {
      id: 2,
      name: "Rice Flour Bread",
      price: 3,
      stock: 20,
      description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
      images: [
        "https://media.istockphoto.com/photos/male-hands-breaking-open-baked-bread-in-half-picture-id1126687472?s=612x612",
        // "https://media.istockphoto.com/photos/fresh-italian-bread-on-a-cutting-board-picture-id158827188?s=612x612",
      ],
    },
    {
      id: 3,
      name: "Rye Bread",
      price: 5,
      stock: 20,
      description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit",
      images: [
        "https://media.istockphoto.com/photos/fresh-loaf-of-bread-on-a-cutting-board-and-salt-picture-id1144562350?s=612x612",
        // "https://media.istockphoto.com/photos/loaf-of-rustic-homemade-bread-picture-id895450778?s=612x612",
      ],
    },
  ],
  busy: false,
});

// ----------- Mutations - Execute some logic and change the state
const mutations = {
  setList(newList: Product[]) {
    state.list = newList;
  },
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
