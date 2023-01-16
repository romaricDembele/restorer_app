// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//     selectedElement: null,
//     actions: [],
//   },
//   getters: {
//   },
//   mutations: {
//     setSelectedElement(state, element) {
//       state.selectedElement = element;
//     },
//     setActions(state, actions) {
//       state.actions = actions;
//     },
//   },
//   actions: {
//   },
//   modules: {
//   }
// })

// store.ts
import { createStore } from 'vuex';
import {Product, Article} from '@/utils/interfaces';

import { getArticles, postArticle } from '@/utils/helpers';
import { deleteArticle as deleteProduct } from '@/utils/helpers';
// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image_url: string;
// }

interface State {
  products: Product[];
}

const state: State = {
  products: [],
};

const mutations = {
  setProducts(state: State, products: Product[]) {
    state.products = products;
  },
  addProduct(state: State, product: Product) {
    state.products.push(product);
  },
  deleteProduct(state: State, id: string) {
    state.products = state.products.filter((product) => product._id !== id);
  },
  updateProduct(state: State, product: Product) {
    const index = state.products.findIndex((p) => p._id === product._id);
    if (index !== -1) {
      state.products.splice(index, 1, product);
    }
  },
};

const actions = {
  async fetchProducts({ commit }: any) {
    const articles = await getArticles();
    commit('setProducts', articles);
    console.log(articles);
  },
  async createProduct({ commit }: any, product: Article) {
    console.log(product.price);
    const response = await postArticle(product);
    console.log(response);
    commit('addProduct', response);
  },
  async deleteProduct({ commit }: any, id: any) {
    await deleteProduct(id);
    commit('deleteProduct', id);
  },
  // async updateProduct({ commit }, product) {
  //   const response = await updateProduct(product);
  //   commit('updateProduct', response.data);
  // },
};

const store = createStore({
  state,
  mutations,
  actions,
});

export default store;

