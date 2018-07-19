import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    expanded: false,
    user: {}
  },

  actions: {
    userLogged ({commit}, user) {
      commit('USER_LOGGED', user)
    },
    toogleMenu ({commit}, expand) {
      commit('MENU_TOOGLE', expand)
    },
  },

  mutations: {
    USER_LOGGED (state, user) {
      state.user = user
    },
    MENU_TOOGLE (state, expanded) {
      state.expanded = expanded
    }
  },
});
