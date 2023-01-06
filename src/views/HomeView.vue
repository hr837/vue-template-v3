<template>
  <div class="page home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
