<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from 'vue'
interface PropType {
  loading?: boolean
  isShowCancel?: boolean
  buttonText?: string
}

withDefaults(defineProps<PropType>(), {
  isShowCancel: true,
  buttonText: '保存',
})

const emits = defineEmits(['cancel', 'save'])

function emitCancel() {
  emits('cancel')
}

function emitSave() {
  emits('save')
}
</script>

<template>
  <div class="component dialog-action">
    <el-button v-if="isShowCancel" @click="emitCancel">
      取消
    </el-button>
    <el-button type="primary" :loading="loading" @click="emitSave">
      {{ buttonText }}
    </el-button>
  </div>
</template>
