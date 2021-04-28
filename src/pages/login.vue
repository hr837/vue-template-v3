<template>
  <div class='page login'>
    <div class="login-form">
      <el-button @click="loingClick">登录</el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useRouter } from "vue-router";

const router = useRouter()

const loingClick = () =>{
  router.push("/workspace")
}


</script>
