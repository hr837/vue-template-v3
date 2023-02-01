<template>
  <div class="component date-range">
    <el-date-picker
      v-model="model"
      type="datetimerange"
      format="YYYY-MM-DD HH:mm:ss"
      range-separator="~"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      :default-time="DEFAULT_TIME"
    />
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed, withDefaults, defineEmits } from "vue";
import dayjs from "dayjs";
type PropType = {
  modelValue: string[];
};
const FORMAT_STR = "YYYY-MM-DD HH:mm:ss";
const DEFAULT_TIME:[Date, Date] = [
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
]
const props = withDefaults(defineProps<PropType>(), {
  modelValue: () => ["", ""],
});

const emits = defineEmits(["update:modelValue"]);

const model = computed({
  get: (): [string, string] => {
    if (!props.modelValue) return ["", ""];
    let [s1, s2] = props.modelValue;
    if (!s1 && !s2) {
      return ["", ""];
    }
    const d1 = s1 ? dayjs(s1).format(FORMAT_STR) : "";
    const d2 = s2 ? dayjs(s2).format(FORMAT_STR) : "";
    return [d1, d2];
  },
  set: (value) => {
    if (!value) {
      emits("update:modelValue", ["", ""]);
      return;
    }
    const [v1, v2] = value;
    const s1 = v1 ? dayjs(v1).format(FORMAT_STR) : "";
    const s2 = v2 ? dayjs(v2).format(FORMAT_STR) : "";
    emits("update:modelValue", [s1, s2]);
  },
});
</script>
