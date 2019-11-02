import WooCommerce from '@/services/wooservice.js'



const state = {
  categories: []
}


const mutations = {
  setCategories(state, categories) {
    if (categories) {
      state.categories = categories
    }
  }
}

const getters = {
  categories(state){
    return state.categories
  },

  categoriesNames(state){
    return state.categories
    .map((item) => item.name)
  }
}


const actions  = {
  getCategories({commit}) {
      WooCommerce.get('products/categories/')
      .then((response) => {
        commit('setCategories', response.data)
      });
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
  // getters
}
