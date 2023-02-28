<script lang="ts" setup>
import { defineProps } from 'vue'
// import { Icon } from '@iconify/vue';

type IconType = 'USER' | 'SETTING' | 'BANKCARD'
interface PropType {
  /** 图标类型(名称)
   * @link http://iconpark.oceanengine.com/official
   */
  type: IconType
}
const props = defineProps<PropType>()
</script>

<template>
  <icon-park-outline-user v-if="type === 'USER'" />
  <icon-park-outline-setting v-else-if="type === 'SETTING'" />
  <icon-local-bankcard v-else-if="type === 'BANKCARD'" />
  <icon-park-outline-application-two v-else />
</template>
