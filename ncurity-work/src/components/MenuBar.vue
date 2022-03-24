<template>
  <div class="menu">
    <router-link v-if="isAdmin == 1" class="left router" to="/memberList"
      ><h3>회원 목록</h3></router-link
    >
    <router-link class="router" to="/visitor"><h3>방문자 통계</h3></router-link>
    <router-link class="router" to="/modifyUser"
      ><h3>정보 수정</h3></router-link
    >
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
let isAdmin = store.state.userInfo.role;
</script>

<style>
.menu {
  background: aquamarine;
}
.menu a:visited {
  color: black;
}
.menu a:active {
  color: #35495e;
}
</style>
