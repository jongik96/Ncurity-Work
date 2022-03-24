<template>
  <div>
    <h1>Sign In</h1>
    <form class="login-form">
      <div class="box">
        <div class="input-box">
          <i class="fa-solid fa-user"></i>
          <input
            id="email"
            class="input-email"
            v-model="state.email"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <i class="fa-solid fa-key"></i>
          <input
            id="password"
            class="input-pw"
            v-model="state.password"
            type="password"
            placeholder="Password"
            required
            @keypress.enter="clickLogin"
          />
        </div>
        <div>
          <button
            :disabled="btnDisable"
            :class="btnDisable"
            class="btn"
            @click="clickLogin"
            type="button"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
.btn {
  margin-left: 100px;
  margin-top: 20px;
  width: 80px;
  height: 40px;
  background-color: white;
  border-color: rgb(0, 0, 255);
  font-optical-sizing: black;
  cursor: pointer;
  font-size: 20px;
  font-weight: bolder;
  border-radius: 5%;
}
.btn:hover {
  background-color: rgb(0, 0, 255);
  color: white;
  font-weight: bolder;
  font-size: 20px;
}
.disable {
  cursor: not-allowed;
  color: gray;
}
p {
  margin-left: 70px;
  margin-bottom: 10px;
  color: red;
}
.input-box {
  margin-top: 20px;
  margin-bottom: 20px;
}
input {
  height: 30px;
  width: 200px;
  border-radius: 5%;
  border-color: gray;
  font-size: 16px;
}
i {
  margin-left: 20px;
}
.input-email {
  margin-left: 30px;
}
.input-pw {
  margin-left: 28px;
}
.box {
  border: solid blue;
  border-radius: 5%;
  height: 200px;
  width: 300px;
}
</style>

<script setup>
import { reactive, computed } from "vue";
import { emailValidation } from "../../utils/validation.js";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useStore();
const state = reactive({
  email: "",
  password: "",
});

let isLogin = store.state.isLogin;

if (isLogin) {
  if (store.state.userInfo.role == 1) router.push("/memberList");
  else {
    router.push("/visitor");
  }
}

const checkEmail = computed(() => {
  return emailValidation(state.email);
});

const btnDisable = computed(() => {
  return checkEmail.value && state.password ? null : "disable";
});

const clickLogin = async () => {
  let response = await store.dispatch("FETCH_LOGIN", state);
  if (response.msg == "success") {
    if (response.userInfo.role == 1) {
      store.state.accounts = response.account;
      router.push("/memberList");
    } else {
      router.push("/visitor");
    }
  } else {
    alert(response.msg);
  }
  state.email = "";
  state.password = "";
};
</script>
