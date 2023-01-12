<template>
  <div class="component dialog-action">
    <el-button @click="emitCancel" v-if="isShowCancel">取消</el-button>
    <el-button type="primary" @click="emitSave" :loading="loading">
      {{ buttonText }}
    </el-button>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits, defineProps, withDefaults } from "vue";
type PropType = {
  loading?: boolean;
  isShowCancel?: boolean;
  buttonText?: string;
};

withDefaults(defineProps<PropType>(), {
  isShowCancel: true,
  buttonText: "保存",
});

const emits = defineEmits(["cancel", "save"]);

function emitCancel() {
  emits("cancel");
}

function emitSave() {
  emits("save");
}
</script>
