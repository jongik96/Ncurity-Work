<template>
  <div v-if="isLogin">
    <menu-bar class="side-menu"></menu-bar>
    <div class="item">
      <top-bar class="top-menu"></top-bar>
      <div class="margin-top"></div>
      <div>
        <h3 class="visitor">시간별 방문자 통계</h3>
        <visitor-chart></visitor-chart>
      </div>
      <div>
        <h3>Top 10 방문자</h3>
        <div class="topten">
          <top-ten-chart
            :key="reRender.count"
            :data="parentData.visitorData"
            class="topten-chart"
          ></top-ten-chart>
          <top-ten-table
            :key="reRender.count"
            @visitData="visitDataChange"
            :data="parentData.visitorData"
            class="topten-table"
          ></top-ten-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import VisitorChart from "../components/visitor/VisitorChart.vue";
import TopTenChart from "../components/visitor/TopTenChart.vue";
import TopTenTable from "../components/visitor/TopTenTable.vue";
import TopBar from "../components/TopBar.vue";
import MenuBar from "../components/MenuBar.vue";
import visitor from "../database/visitor.json";
import { reactive } from "vue";

const parentData = reactive({
  visitorData: visitor,
});

import { useRouter } from "vue-router";
import { useStore } from "vuex";

const reRender = reactive({
  count: 0,
});
function visitDataChange(data) {
  for (let i = 0; i < data.length; i++) {
    data[i].visit_count = Number(data[i].visit_count);
    reRender.count += 1;
  }

  parentData.visitorData = data;
}

const store = useStore();
const router = useRouter();
let isLogin = store.state.isLogin;

if (isLogin == false) {
  alert("로그인 후 이용 가능합니다.");
  router.push("/");
}
</script>

<style scoped>
.visitor {
  margin-top: 40px;
}
.topten {
  display: flex;
  margin-top: 10px;
}
.topten-table {
  margin-left: 10px;
}
.margin-top {
  height: 40px;
}
.count {
  display: flex;
  justify-content: flex-end;
}
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
</style>
