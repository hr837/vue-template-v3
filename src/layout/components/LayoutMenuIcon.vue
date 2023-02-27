<script lang="ts" setup>
import { computed, defineProps } from 'vue'
// import { Icon } from '@iconify/vue';
import IconAbdominal from '~icons/icon-park-outline/abdominal'
import IconUser from '~icons/icon-park-outline/user'
import IconSetting from '~icons/icon-park-outline/setting-two'

interface PropType {
  /** 图标类型(名称)
   * @link http://iconpark.oceanengine.com/official
   */
  type: IconType
}
const props = defineProps<PropType>()

type IconType = keyof typeof iconSet

const iconSet = {
  user: IconUser,
  abdominal: IconAbdominal,
  setting: IconSetting,
}

const MenuIcon = computed(() => iconSet[props.type])
</script>

<template>
  <component :is="MenuIcon" />
</template>
