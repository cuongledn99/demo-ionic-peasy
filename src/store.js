import { createStore, thunk, action } from 'easy-peasy';
import axios from 'axios';

const API_URL = 'https://5f7e84300198da0016893989.mockapi.io/api/products'
const store = createStore({
  products: [],
  pushLocalProducts: action((state, payload) => {
    // console.log("Start push " + JSON.stringify(payload, null, 2))
    state.products = [
      ...state.products,
      ...payload
    ]
    // console.log("Push done")
    // console.log(state.products)
  }),
  fetchProduct: thunk(async (actions) => {
    const { data } = await axios.get(API_URL);
    // console.log("Fetch product done " + JSON.stringify(data, null, 2))
    actions.pushLocalProducts(data);
  }),

});

export { store }