<template>
  <div></div>
</template>
<script setup>
// 重定向组件
import { userRoute, useRouter } from "vue-router";
const route = userRoute();
const router = useRouter();
const { params, query } = route;
const { path } = params;
router.replace({ path: "/" + path, query });
</script>
