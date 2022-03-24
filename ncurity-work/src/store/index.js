import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import actions from "./actions.js";
import mutations from "./mutations.js";

export default createStore({
  state: {
    accounts: [],
    time: [],
    userInfo: [],
    count: 0,
    isLogin: false,
  },
  mutations,
  actions,
  plugins: [createPersistedState()],
});
