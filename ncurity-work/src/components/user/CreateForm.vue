<template>
  <div>
    <h3>회원가입</h3>
    <div>
      <form>
        <div>
          <p>Email</p>
          <input v-model="state.email" type="text" />

          <p>ID</p>
          <input v-model="state.id" type="text" />

          <p>Password</p>
          <input v-model="state.password" type="password" />

          <p>Name</p>
          <input
            :value="state.name"
            @input="(event) => (state.name = event.target.value)"
            type="text"
          />

          <p>H.P</p>
          <input v-model="state.hp" type="text" />
          <p>Description</p>
          <textarea
            :value="state.desc"
            @input="(event) => (state.desc = event.target.value)"
            name="description"
            id="description"
            cols="30"
            rows="10"
          >
          </textarea>
        </div>
      </form>
      <button
        :class="btnDisable"
        :disabled="btnDisable"
        class="btn"
        type="button"
        @click="clickJoin"
      >
        가입하기
      </button>
      <button class="route">
        <router-link to="/">돌아가기</router-link>
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { Join } from "../../utils/account.js";
import { emailValidation } from "../../utils/validation.js";
import { useStore } from "vuex";
const store = useStore();

import { useRouter } from "vue-router";
const router = useRouter();

const state = reactive({
  email: "",
  id: "",
  password: "",
  name: "",
  hp: "",
  role: 2,
  status: 1,
  desc: "",
});

const checkEmail = computed(() => {
  return emailValidation(state.email);
});

const btnDisable = computed(() => {
  return checkEmail.value && state.id && state.password && state.name
    ? null
    : "disable";
});

const clickJoin = async () => {
  let response = await Join(state);
  store.state.accounts = response.account;
  alert(response.msg);
  router.push("/");
};
</script>

<style scoped>
.btn {
  margin-top: 20px;
  width: 80px;
  height: 40px;
  background-color: white;
  border-color: rgb(0, 0, 255);
  font-optical-sizing: black;
  cursor: pointer;
  font-size: 15px;
  font-weight: bolder;
  border-radius: 5%;
}
.route {
  margin-left: 40px;
  margin-bottom: 20px;
  width: 100px;
  height: 40px;
  background-color: white;
  border-color: black(0, 0, 255);
  font-optical-sizing: black;
  cursor: pointer;
  font-size: 15px;
  font-weight: bolder;
  border-radius: 5%;
}
.btn:hover {
  background-color: rgb(0, 0, 255);
  color: white;
  font-weight: bolder;
  font-size: 15px;
}
.disable {
  cursor: not-allowed;
  color: gray;
}
</style>
