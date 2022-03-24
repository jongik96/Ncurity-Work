<template>
  <div>
    <menu-bar class="side-menu"></menu-bar>
    <div class="item">
      <top-bar class="top-menu"></top-bar>
      <div class="margin-top"></div>
      <modify-user></modify-user>
    </div>
  </div>
</template>

<script setup>
import TopBar from "../../components/TopBar.vue";
import MenuBar from "../../components/MenuBar.vue";
import ModifyUser from "../../components/user/ModifyUser.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const router = useRouter();

let isLogin = store.state.isLogin;

if (isLogin == false) {
  alert("로그인 후 이용 가능합니다.");
  router.push("/");
}
</script>

<style scoped>
.top-menu {
  float: right;
}
.side-menu {
  position: fixed;
  height: 100%;
  width: 13%;
}
.item {
  margin-left: 15%;
  width: 85%;
}
.margin-top {
  height: 40px;
}
</style>
