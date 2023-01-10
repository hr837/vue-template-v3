<template>
  <div class="component data-box-action flex">
    <div><slot name="buttons"></slot></div>
    <div><slot name="append"></slot></div>
  </div>
</template>
<style lang="less">
.data-box-action {
  justify-content: space-between;
}
</style>
