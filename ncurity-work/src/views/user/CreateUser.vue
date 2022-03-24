<template>
  <div class="container">
    <div></div>
    <div>
      <CreateForm></CreateForm>
    </div>
    <div></div>
  </div>
</template>

<script setup>
import CreateForm from "../../components/user/CreateForm.vue";
</script>

<style scoped>
.container {
  margin-top: 30px;
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
