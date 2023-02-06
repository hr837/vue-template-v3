<template>
  <div class="component data-box-action flex">
    <div><slot name="buttons" /></div>
    <div><slot name="append" /></div>
  </div>
</template>

<style lang="less">
.data-box-action {
  justify-content: space-between;
}
</style>
