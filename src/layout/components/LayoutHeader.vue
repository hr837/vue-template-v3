<template>
  <div class="component layout-header flex justify-center">
    <div v-if="showToken">token:{{ store.user.token }}</div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "@/store";
import { computed } from "vue";

const store = useStore();

const showToken = computed(() => !store.app.microApp);
</script>

<style lang="scss" scoped></style>
