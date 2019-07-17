<template>
  <baidu-map class="bm-view" ak="WXZF6FsTow7zlnw16ICbOyNPChQ67axg" :center="center" :zoom="zoom" :scroll-wheel-zoom="true"></baidu-map>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BaiduMap from 'vue-baidu-map/components/map/Map.vue';
@Component({
  components: {
    BaiduMap,
  },
})
export default class Home extends Vue {

  private center = { lng: 116.404, lat: 39.915 };
  private zoom = 15;

}
</script>

<style lang="less" scoped>
.bm-view {
  width: 100%;
  height: 500px;
}
</style>
