<template>
  <div class="page login">
    <el-button @click="login">login</el-button>
  </div>
</template>

<script lang="ts" setup>
// import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
function login() {
  router.push("/");
}
</script>
