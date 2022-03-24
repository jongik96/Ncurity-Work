<template>
  <div>
    <div>
      <i class="fa-solid fa-magnifying-glass"></i>
      <span>
        <input
          type="text"
          id="filter-text-box"
          placeholder="검색어를 입력하세요."
          v-on:input="onFilterTextBoxChanged()"
        />
      </span>
    </div>
    <ag-grid-vue
      style="width: 100%; height: 500px"
      class="ag-theme-alpine"
      :columnDefs="accountData.columnDefs"
      :rowData="accountData.rowData"
      :pagination="true"
      :paginationPageSize="10"
      :cacheQuickFilter="true"
      @grid-ready="onGridReady"
      :onCellEditingStopped="change"
    ></ag-grid-vue>
  </div>
</template>

<script setup>
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { AgGridVue } from "ag-grid-vue3";
import { onBeforeMount, reactive } from "vue";
import { useStore } from "vuex";
import { getRole } from "../utils/account.js";

const store = useStore();

const memberData = store.state.accounts;
const rowData = getRole(memberData);
// const visitData = store.state.accounts;
// const rowData = getRole(store.state.accounts);
const accountData = reactive({
  columnDefs: [
    {
      headerName: "No.",
      field: "seq",
      sortable: true,
      resizable: true,
    },
    {
      headerName: "Id",
      field: "id",
      sortable: true,
      resizable: true,
      editable: true,
    },
    {
      headerName: "이름",
      field: "name",
      sortable: true,
      resizable: true,
      editable: true,
    },
    {
      headerName: "email",
      field: "email",
      sortable: true,
      resizable: true,
      editable: true,
    },
    { headerName: "hp", field: "hp", resizable: true, editable: true },
    {
      headerName: "역할",
      field: "roleName",
      resizable: true,
      // cellEditorParams: true,
      // cellEditorPopupPositionn: "under",
    },
    {
      headerName: "상태",
      field: "state",
      resizable: true,
      editable: true,
      // cellEditorParams: true,
      // cellEditorPopupPositionn: "under",
    },
  ],
  rowData,
  gridOptions: null,
  gridApi: null,
  columnApi: null,
});
const change = () => {
  store.state.accounts = accountData.rowData;
};

onBeforeMount(() => {
  accountData.gridOptions = {
    enableFilter: true,
  };
});

const onGridReady = (params) => {
  accountData.gridApi = params.api;
  accountData.columnApi = params.columnApi;
};

const onFilterTextBoxChanged = () => {
  accountData.gridApi.setQuickFilter(
    document.getElementById("filter-text-box").value
  );
};
</script>

<style scoped>
i {
  margin-right: 8px;
}
</style>
