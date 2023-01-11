<template>
  <div class="component layout-header">
    <LayoutHeaderSysLogo  />
    <div v-if="showToken">token:{{ store.user.token }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { computed } from "vue";
import LayoutHeaderSysLogo from './LayoutHeaderSysLogo.vue'
const store = useStore();

const showToken = computed(() => !store.app.microApp);
</script>

<style lang="less" scoped>
.layout-header {
  @apply bg-white h-full flex justify-between items-center;
}
</style>
