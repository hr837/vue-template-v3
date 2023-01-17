<template>
  <div class="component number-range">
    <el-input
      v-model.number="min"
      type="tel"
      clearable
      placeholder="输入数字"
      :min="0"
      :max="999999999"
      @keydown="minChangeInput"
      @mousewheel.prevent
    ></el-input>
    <span>~</span>
    <el-input
      v-model.number="max"
      type="tel"
      clearable
      placeholder="输入数字"
      :min="0"
      :max="999999999"
      @keydown="minChangeInput"
      @mousewheel.prevent
    ></el-input>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, defineEmits } from "vue";
type InputType = string | number;

type PropType = {
  modelValue: InputType[];
};
const props = defineProps<PropType>();
const emits = defineEmits(["update:modelValue"]);

const min = computed({
  get: () => {
    const [min] = props.modelValue;
    return min;
  },
  set: (value) => {
    const [, max] = props.modelValue;
    const val = value === undefined ? "" : value;
    emits("update:modelValue", [val, max]);
  },
});

const max = computed({
  get: () => {
    const [, max] = props.modelValue;
    return max;
  },
  set: (value) => {
    const [min] = props.modelValue;
    const val = value === undefined ? "" : value;
    emits("update:modelValue", [min, val]);
  },
});

function minChangeInput(e: any) {
  const reg = new RegExp(/^\d{n}$/);
  if (e.key === "Backspace") {
    e.returnValue = true;
    return true;
  } else if (isNaN(parseInt(e.key)) && !reg.test(e.key)) {
    e.returnValue = false;
    return false;
  } else {
    return true;
  }
}
</script>
