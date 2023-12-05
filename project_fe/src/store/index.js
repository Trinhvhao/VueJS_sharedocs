// src/store/index.js
import { createStore } from 'vuex';


const store = createStore({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setEmail(state,email){
      state.email = email;
    },
    clearUser(state) {
      state.user = null;
    },
  },
});
export default store;