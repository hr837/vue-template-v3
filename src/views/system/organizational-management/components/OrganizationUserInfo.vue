<script lang="ts" setup></script>

<template>
  <div class="organization-user-info">
    <ContainerHeader title="用户信息" tip-text="（包括名称姓名）">
      <template #icon>
        <icon-park-outline-bookmark-one theme="outline" size="24" fill="#fff" />
      </template>
    </ContainerHeader>
    <DataGrid
      :row-span="12"
      border-width="0px"
      border-color=""
      label-width="auto"
      label-align="right"
      content-align="left"
      label-color="#888888"
      font-size="12px"
    >
      <DataGridItem
        label="名称："
        :col-span="4"
        content-align="center"
        required
        font-size="12px"
      >
        北京
      </DataGridItem>
      <DataGridItem label="姓名：" :col-span="4">
        上海
      </DataGridItem>
      <DataGridItem label="名称：" :col-span="4">
        深圳
      </DataGridItem>
      <DataGridItem label="名称：" :col-span="4">
        广州
      </DataGridItem>
      <DataGridItem label="名称：" :col-span="4">
        北京
      </DataGridItem>
      <DataGridItem label="详情地址：" :col-span="4">
        上海市浦东区上海市浦东区
      </DataGridItem>
      <DataGridItem label="联系电话：" :col-span="4">
        18734444444
      </DataGridItem>
      <DataGridItem label="名称：" :col-span="4">
        广州
      </DataGridItem>
    </DataGrid>
  </div>
</template>

<style lang="less" scoped></style>
