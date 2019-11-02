const state = {
  items: [],
  lastAddedItem: null,
}

const mutations = {
  addToCart(state, product){
    if (state.items.some(item => item.id == product.id)) {
       let sameElement  = state.items.find(item => item.id == product.id)
       ++ sameElement.quantity;
    }
    else {
      const quantity = {quantity: 1}
      state.items.push({...product, ...quantity})
    }
    state.lastAddedItem = product
  },

  deleteItem(state, product){
    let index = state.items.indexOf(product)
    state.items.splice(index , 1)
  },

  increaseQuantity(state, product){
    let sameElement  = state.items.find(item => item.id == product.id)
    ++sameElement.quantity;
  },
  decreaseQuantity(state, product) {
    let sameElement  = state.items.find(item => item.id == product.id)
      if(sameElement.quantity > 0){
          --sameElement.quantity;
      }
  }
}

const getters = {
  totalPrice(state){
    if (state.items.length){
      return state.items.reduce(function(total, item){
        return total + parseInt(item.price) * item.quantity;
      }, 0)
    }
    else {
      return 'В вашей корзине пока нет товаров'
    }
  },

  numberOfItems(state){
    return state.items.length
  },

  lastAddedItem(state){
    return state.lastAddedItem
  }
}

const actions = {
  addToCart({commit}, product) {
      commit('modalWindow/hide', null, { root: true })
      commit('addToCart', product)
      commit('modalWindow/show', null, { root: true })
    setTimeout(()=> {
      commit('modalWindow/hide', null, { root: true })
    }, 5000)
  },

  removeFromCart({commit}, product){
    commit('deleteItem', product)
  },
  increaseQuantity({commit}, product){
    commit('increaseQuantity', product)
  },
  decreaseQuantity({commit}, product){
    if (product.quantity > 1){
      commit('decreaseQuantity', product)
    }
    else {
      commit('deleteItem', product)
    }
}
}


export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
