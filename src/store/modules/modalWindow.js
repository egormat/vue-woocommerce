const state = {
    showed : false
}


const mutations = {
  show(state){
    state.showed = true;
  },
  hide(state){
    state.showed = false;
  }

}

const getters = {
  showed(state){
    return state.showed
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
}
