<template>
  <div>
    <ag-grid-vue
      style="width: 850px; height: 300px"
      class="ag-theme-alpine"
      :columnDefs="accountData.columnDefs"
      :rowData="accountData.rowData"
      :cellValueChanged="change"
      :onCellEditingStopped="change"
    ></ag-grid-vue>
  </div>
</template>

<script setup>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { reactive, defineProps, defineEmits } from "vue";

import { addRank, sortVisitor } from "../../utils/visit.js";
const props = defineProps({
  data: Array,
});
const accountData = reactive({
  columnDefs: [
    { headerName: "순위", field: "rank" },
    { headerName: "이름", field: "name" },
    { headerName: "방문 횟수", field: "visit_count", editable: true },
    { headerName: "최근 방문", field: "updated_at" },
  ],
  rowData: addRank(sortVisitor(props.data)),
});
const emit = defineEmits(["visitData"]);
const change = () => {
  emit("visitData", accountData.rowData);
};
</script>

<style></style>
