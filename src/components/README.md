# 公共组件使用说明

## 目录使用
  * 所有目录都需要小写
  * common目录下代表通用组件，使用率极高。
  * 与common目录同级的代表专有目录，可以是公共业务组件目录，可以是第三方组件目录等

## 组件的使用
  * common目录下的组件已经配置了自动导入，并且带有提示，使用的时候直接使用，不用导入。

    ```html
    <template>
      <!-- ... -->
        <!-- DataBox 在common目录下，所以不需要自动引入就可以使用 -->
        <DataBox :data="dataSet"></DataBox>

        <!-- 下面这个组件并非common目录下的组件，如果使用的话需要手动import -->
        <ReportComp></ReportComp>
      <!-- ... -->
    </template>

    <script lang="ts" setup>
      const dataSet = [
        {id:123,name:'test'}
      ]
    </script>
    ```

    > 自定义组件推荐标签名称大写。


