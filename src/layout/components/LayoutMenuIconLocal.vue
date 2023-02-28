<script lang="ts" setup>
import { computed, defineProps } from 'vue'
// import { Icon } from '@iconify/vue';
import IconBankCard from '~icons/icon-local/bankcard'

interface PropType {
  /** 图标类型(名称)
   * @link http://iconpark.oceanengine.com/official
   */
  type: IconType
}
const props = defineProps<PropType>()

type IconType = keyof typeof iconSet

const iconSet = {
  bankcard: IconBankCard,

}

const MenuIcon = computed(() => iconSet[props.type])
</script>

<template>
  <component :is="MenuIcon" />
</template>
