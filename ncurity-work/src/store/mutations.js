export default {
  SET_TIME(state, time) {
    state.time = time;
  },
  SET_LOGIN(state, userInfo) {
    state.userInfo = userInfo;
  },
  SET_ISLOGIN(state, status) {
    state.isLogin = status;
  },
};
