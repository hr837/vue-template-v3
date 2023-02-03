<script lang="ts" setup>
import { computed } from 'vue'
import LayoutHeaderSysLogo from './LayoutHeaderSysLogo.vue'
import { useStore } from '@/store'
const store = useStore()

const showToken = computed(() => !store.app.microApp)
</script>

<template>
  <div class="component layout-header">
    <LayoutHeaderSysLogo />
    <div v-if="showToken">
      token:{{ store.user.token }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout-header {
  @apply bg-white h-full flex justify-between items-center;
}
</style>
