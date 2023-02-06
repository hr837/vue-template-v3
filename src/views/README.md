# 业务界面目录说明

## 目录使用
  * 所有目录都需要小写
  * 各页面推荐按功能模块最小化分割，可在页面同级创建`components`目录来防止当前页面的组件
  * 如果页面创建了`components`目录来存放模块组件，那么这个页面文件需要增加一层文件目录，用来存放`页面`和`组件目录`
  ```
    src/
      views/
        system/
          user-manage/
          |  UserManageView.vue
          |  components/
          |     UserManageQuery.vue
          |     UserManageDialogEdit.vue
          |     UserManageDialogRole.vue
          |     ...
          SystemLogView.vue
  ```

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


