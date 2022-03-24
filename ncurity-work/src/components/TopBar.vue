<template>
  <div>
    <div>
      <p>{{ user.id }} 님 환영합니다</p>
    </div>
    <div>
      <button @click="clickLogout">Logout</button>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const user = store.state.userInfo;

const clickLogout = () => {
  localStorage.removeItem("vuex");
  store.state.isLogin = false;
  router.push("/");
};
</script>

<style scoped>
button {
  float: right;
  background-color: white;
  border-color: red;
  border-radius: 10%;
  color: red;
  cursor: pointer;
}
</style>
