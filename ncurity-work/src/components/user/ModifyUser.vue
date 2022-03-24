<template>
  <div>
    <h3>회원정보 수정</h3>
    <div>
      <form>
        <div>
          <p>Email : {{ state.email }}</p>
        </div>
        <div>
          <p>ID</p>
          <input v-model="state.id" type="text" />
        </div>
        <div>
          <p>Password</p>
          <input v-model="state.password" type="password" />
        </div>
        <div>
          <p>Name</p>
          <input
            :value="state.name"
            @input="(event) => (state.name = event.target.value)"
            type="text"
          />
        </div>
        <div>
          <p>H.P</p>
          <input v-model="state.hp" type="text" />
        </div>
        <div>
          <p>State</p>
          <select name="status" id="status" v-model="state.status">
            <option value="1">활성화</option>
            <option value="2">비활성화</option>
          </select>
        </div>
        <div>
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
      <button @click="deleteUser" class="delete" type="button">
        회원 삭제
      </button>
      <button
        class="btn"
        :class="btnDisable"
        :disabled="btnDisable"
        type="button"
        @click="clickModify"
      >
        수정하기
      </button>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { modifyUserInfo } from "../../utils/account.js";

const router = useRouter();
const store = useStore();
const account = store.state.accounts;
const userInfo = store.state.userInfo;
const seq = userInfo.seq;
const state = reactive({
  email: userInfo.email,
  id: userInfo.id,
  password: userInfo.pw,
  name: userInfo.name,
  hp: userInfo.hp,
  status: userInfo.state,
  desc: userInfo.description,
});

const deleteUser = () => {
  if (confirm("정말 삭제하시겠습니까?")) {
    store.state.isLogin = false;
    account.splice(seq - 1, 1);
    store.state.accounts = account;
    // store.state.account = account;
    router.push("/");
    alert("삭제되었습니다");
  }
};

const clickModify = async () => {
  let response = await modifyUserInfo(userInfo, state);
  store.state.userInfo = response;
  router.push("/visitor");
};

const btnDisable = computed(() => {
  return state.id && state.password && state.name && state.status
    ? null
    : "disable";
});
</script>

<style scoped>
form {
  width: 400px;
}
.delete:hover {
  background-color: red;
  color: white;
  font-weight: bolder;
  font-size: 15px;
}
.delete {
  margin-top: 20px;
  width: 100px;
  height: 40px;
  background-color: white;
  border-color: red;
  font-optical-sizing: black;
  cursor: pointer;
  font-size: 15px;
  font-weight: bolder;
  border-radius: 5%;
}

.btn {
  margin-left: 50px;
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
