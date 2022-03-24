<template>
  <div v-if="isLogin">
    <menu-bar class="side-menu"></menu-bar>
    <div class="item">
      <top-bar class="top-menu"></top-bar>
      <div class="margin-top"></div>
      <h3>회원 목록</h3>
      <member-table></member-table>
    </div>
  </div>
</template>

<script setup>
import MemberTable from "../components/MemberTable.vue";
import TopBar from "../components/TopBar.vue";
import MenuBar from "../components/MenuBar.vue";

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
.side-menu {
  position: fixed;
  height: 100%;
  width: 13%;
}
.margin-top {
  height: 40px;
}
.top-menu {
  float: right;
}
.item {
  margin-left: 15%;
  width: 85%;
}
</style>
