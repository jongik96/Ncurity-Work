<template>
  <div class="container">
    <div></div>
    <div>
      <login-form></login-form>
      <router-link to="/createUser">회원가입</router-link>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import LoginForm from "../../components/user/LoginForm.vue";
</script>

<style scoped>
.container {
  margin-top: 100px;
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
