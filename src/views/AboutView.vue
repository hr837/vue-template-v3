<template>
  <div class="page about">
    <h1>This is an about page</h1>
    <el-button @click="updateUserToken">改变token</el-button>
    <el-button type="primary" @click="setMicroEnable"
      >显示/隐藏头部Token</el-button
    >
    <el-button type="warning" @click="toLogin">登录</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { useRouter } from "vue-router";

const store = useStore();

function updateUserToken() {
  const randomStr = (Math.random() * 10000000).toString();
  store.user.updateToken(randomStr);
}

function setMicroEnable() {
  store.app.setMicroState();
}

const router = useRouter();

function toLogin() {
  router.replace("/login");
}
</script>
