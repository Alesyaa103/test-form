import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    user: {},
    isValid: false,
  },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_VAlID: (state, isValid) => {
      state.isValid = isValid;
    }
  },
  
});
export default store;