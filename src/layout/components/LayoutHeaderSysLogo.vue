<script lang="ts" setup>
</script>

<template>
  <div class="layout-header-logo ">
    <router-link to="/">
      <img
        src="~@/assets/images/logo.png"
        class="w-full"
      >
    </router-link>
  </div>
</template>

<style lang="less" scoped>
.layout-header-logo {
  @apply bg-white flex justify-center items-center;
  max-width: 240px;
  height: 60px;
}
</style>
