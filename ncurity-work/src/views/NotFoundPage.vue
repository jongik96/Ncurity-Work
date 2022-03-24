<template>
  <div></div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

alert("존재하지 않는 페이지입니다.");
router.push("/");
</script>

<style></style>
