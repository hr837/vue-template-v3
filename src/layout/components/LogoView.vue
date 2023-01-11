<template>
  <div class="sidebar-logo-container" style="background-color: white">
    <router-link class="sidebar-logo-link" to="/">
      <img src="~@/assets/images/logo.png" class="sidebar-logo" />
    </router-link>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  max-width: 240px;
  height: 60px;
  line-height: 60px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 100%;
      vertical-align: middle;
    }
  }
}
</style>
