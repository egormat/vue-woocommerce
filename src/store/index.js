
import Vue from 'vue';
import Vuex from 'vuex';

import products from './modules/products'
import categories from './modules/categories'
import cart from './modules/cart'
import modalWindow from './modules/modalWindow'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);


 const store =  new Vuex.Store({
   plugins: [createPersistedState({
     paths: ['cart']
   })],
  modules: {
    products,
    categories,
    cart,
    modalWindow
  },
  // strict : true,
})


export default store;
