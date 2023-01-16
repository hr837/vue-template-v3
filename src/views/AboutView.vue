<template>
  <div class="page about">
    <h1>This is an about page</h1>
    <el-button @click="updateUserToken">改变token</el-button>
    <el-button type="primary" @click="setMicroEnable"
      >显示/隐藏头部Token</el-button
    >
    <el-button type="warning" @click="toLogin">登录</el-button>
    <el-button @click="toUser">机构与用户</el-button>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { useRouter } from "vue-router";
import { UserService } from "@/http/services/UserService";
import { onMounted } from "vue";

const store = useStore();
const service = new UserService();

function updateUserToken() {
  service
    .getToken({
      loginName: "superadmin",
      password:
        "ZYkoT63IzXigaADXZms3cAl3/OMnwQPHnuEDLcn8Kaa+H1psEUobCe8xBf0MNfgJHOkdxthVIXLhwfzJMia7wSMz+4PZrAlTlmnuwMmFCXGkpGzOjOjnlvhy2rkpE+y/GuTB4xFX+LNgIdCLXR2kkhr2axFt4veV0vMcqg7f7h8=",
    })
    .then((data) => {
      const result = JSON.parse(data.datas.tokens);
      console.log(result);
      store.user.updateToken(result.access_token);
    });
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

function toUser() {
  router.push("/system/organize/users");
}

onMounted(updateUserToken);
</script>
