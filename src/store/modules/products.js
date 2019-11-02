import WooCommerce from '@/services/wooservice.js'


const state = {
  products: [],
};

const mutations = {
  setProducts(state, products){
    if (products){
      state.products = products.reverse(); //массив приходит с сервака перевернутым
      }
  }
};


const actions  = {
  getProducts({commit}) {
    WooCommerce.get('products')
    .then((response) => {
      commit('setProducts', response.data)
    });
 }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
  // getters
}
