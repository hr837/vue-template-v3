<template>
  <div class="component layout-header">
    <LogoView  />
    <div v-if="showToken">token:{{ store.user.token }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { computed } from "vue";
import LogoView from './LogoView.vue'
const store = useStore();

const showToken = computed(() => !store.app.microApp);
</script>

<style lang="less" scoped>
.layout-header {
  @apply bg-gray-300 h-full flex justify-between items-center;
}
</style>
