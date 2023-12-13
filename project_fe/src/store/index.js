// src/store/index.js
import { createStore } from 'vuex';


const store = createStore({
  state: {
    user: null,
  },
// 'mutations': là nơi chứa các mutations, là các hàm thay đổi trạng thái trong store
//  Mỗi mutation nhận vào một tham số là state (trạng thái hiện tại của store) và các tham số khác cần thiết
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