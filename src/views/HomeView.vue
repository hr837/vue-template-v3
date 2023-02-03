<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomeView',
  components: {},
})
</script>

<template>
  <div class="page home flex flex-col items-center">
    <img alt="Vue logo" src="../assets/images/logo.png">

    <h3>图标示例</h3>
    <ul>
      <li>IconPark 图标 <icon-park-outline-config class="text-red-400" /></li>
      <li>本地 SVG 图标<icon-local-bankcard class="text-green-400" /></li>
    </ul>

    <h3>link</h3>
    <router-link to="/about">
      About
    </router-link>
  </div>
</template>
