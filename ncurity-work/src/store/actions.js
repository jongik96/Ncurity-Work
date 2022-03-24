import time from "@/database/time.json";
import { Login } from "../utils/account.js";
export default {
  FETCH_TIME({ commit }) {
    return commit("SET_TIME", time);
  },

  async FETCH_LOGIN({ commit }, state) {
    const response = await Login(state);
    commit("SET_LOGIN", response.userInfo);
    commit("SET_ISLOGIN", response.status);
    return response;
  },
};
