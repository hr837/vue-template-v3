# cgrzzl-platform-front-template 创格平台前端项目模板

使用Vue3+Typescript的模板项目

<br>

## 项目使用说明

推荐使用fork方式维护中心仓库使用branch创建提交PR的代码版本。  
[这里](./docs/GIT.README.md)有一份简单的说明文档也许能可以帮助你理解fork的管理的流程。

> 当前项目作为所有前端项目的模板项目，不应该直接Push，而是采用提交PR的形式进行合并。

<br>

## 项目目录结构说明
```
src 
 - assets             需要打包到js中的资源文件
 - components         项目中公共组件部分
 - config             关于项目的核心配置，业务系统无需关心该目录
 - http               项目的所有http请求配置目录
 - layout             项目支持的页面布局配置
   - components       布局页面的关联组件
 - router             项目的路由配置，关联页面、布局
 - store              项目的全局使用数据
 - views              项目的页面系统
    - [groupA]
      - [xxxx]View.vue 页面单文件
    - [groupB]        
      - [xxxx]                    页面比较复杂，需要抽取组件
        - [xxxx]View.vue          页面文件
        - components              页面文件所需的组件目录
          - [xxxx][module].vue    当前页面特有的组件模块，公共组件可以放置在 /src/components/ 目录下面
typings               项目的ts类型定义系统，全局类型定义在此
```

<br>

## 开发指导 

阅读该指导，帮助你理解该项目设计思路

### 项目技术栈

* Project Cli -- [VueCli 5](https://cli.vuejs.org/zh/)
* Build Tools--[Webpack 5](https://www.webpackjs.com/concepts/)
* ScriptLang-- [Typescript 4](https://www.typescriptlang.org/)
* Vue-- [Vue 3](https://cn.vuejs.org/)，推荐使用script-setup方式，也可以使用defineComponet方式写Vue3 setup方式或者Vue2的风格的声明方式
* Store-[Pinia 2](https://pinia.vuejs.org/zh/getting-started.html) 模板使用需要对state进行ref
* Router-[VueRouter 4](https://router.vuejs.org/zh/guide/)
* UI-- [Element-plus 2](https://element-plus.gitee.io/zh-CN/guide/changelog.html) 写法基本不变
* CSS--[Tailwind.css 2](https://www.tailwindcss.cn/docs)
* Icon--[IconPark](http://iconpark.oceanengine.com/official) 字节跳动图标库，上千图标
  
<br>

### 开发所用的插件

| 插件名称                                                                                                   | 插件ID                    | 说明                                         |
| ---------------------------------------------------------------------------------------------------------- | ------------------------- | -------------------------------------------- |
| [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)                                     | Vue.volar                 | Language support for Vue  3                  |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) | bradlc.vscode-tailwindcss | Intelligent Tailwind CSS tooling for VS Code |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                       | dbaeumer.vscode-eslint    | Integrates ESLint JavaScript into VS Code.   |
| [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)    | esbenp.prettier-vscode    | Code formatter using prettier                |

<br>

### 文件命名规范：

Vue文件推荐大写字母开头命名，
* 页面命名推荐业务名称+View结尾
* 组件命名推荐Page名称+Module名称。

其他文件命名尽量使用其目录中已有文件一致的命名方式。

例如：  
page:   HomeView.vue,   
compoents:  HomeReport.vue,   HomeReportLineChart.vue

<br>

### 组件开发

* 组件属性声明，推荐使用`type`定义该组件的属性，记得写好属性字段的备注，有[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)插件的支持,在父组件调用的时候将具有属性字段文档提示。
    
  ``` ts
  // ./components/WorkSpaceMenu.vue
  import { defineProps } from "vue";
  type PropType = {
    /** 是否折叠菜单 */
    collapse: boolean;
  };
  defineProps<PropType>();
  ```

* 组件的使用,在script setup书写模式下，不需要注册组件即可使用。

  ``` html
  <template>
    <!-- ... -->
    <div>
      <!-- ... -->
    <LayoutWorkMenu :collapse="!showAside" />
    </div>
  </template>

  <script lang="ts" setup>
  import { ref } from 'vue'
  import LayoutWorkMenu from "./components/LayoutWorkMenu.vue";

  const showAside = ref(true);
  </script>
  ```

* 组件的使用,在defineCompoent 模式，需要注册组件。

  ``` html
  <template>
    <!-- ... -->
    <div>
      <!-- ... -->
    <LayoutWorkMenu :collapse="!showAside" />
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from "vue";
  import LayoutWorkMenu from "./components/LayoutWorkMenu.vue";
  export default defineComponent({
    components: {
      LayoutWorkMenu,
    },
    data() {
      return {
        showAside: true,
      };
    },
  });
  </script>
  ```

* 给父组件发送事件（Emitter),事件的注册方式还随之前写法一样使用`v-on`或者`@`指令
  
  > 后续示例都将使用`setup`语法，`defineComponent`方式请查阅[Vue](https://cn.vuejs.org/)官方文档。

  ```ts
  // ./components/WorkSpaceMenu.vue
  import { defineEmits } from "vue";

  const emitter = defineEmits(["onMenuClick"]);
  function onMenuSelect() {
    // ...
    emitter("onMenuClick", { data: "xxx" });
  }
  ```

* 组件内请求后端接口数据
  
  ```ts
  import type { UserModel } from "@/http/models/user.model";
  import { type QueryUserInput } from "@/http/services/UserService";

  // the template form component bind object
  const queryModel = reactive<QueryUserInput>({
    username: "",
    createdAt: "",
  });

  // the template table component bind datasrouce
  const dataList = ref<UserModel[]>([]);
  // service instance
  const service = new UserService();

  // the request method
  function queryHandle() {
    service.findUser(queryModel).then((data) => {
        dataList.value = data
    });
  }

  // send a http request on component mounted
  onMounted(queryHandle);
  ```

* 使用store

  > 非同根跨级节点建议不使用store，非global数据不建议使用store

 1. 定义store

    ```ts
    // /src/store/app.store.ts
    type State = {
      /** 是否显示左侧菜单 */
      showAside: boolean;
    };

    // 初始化的数据
    const initialState: State = {
      showAside: true,
    };

    /** application store */
    export const useAppStore = defineStore("app", {
      state: () => initialState,
      actions: {
        /** 设置左侧菜单可见性 */
        setAsideVisible(visible: boolean) {
          this.showAside = visible;
        },
      }
    });

    ```
  2. 注册到store根实例

      ```ts
      // /src/store/index.ts
      import { useAppStore } from "./app.store";
      const stores = {
        app: () => useAppStore(),
      };

      const store = defineStore("main", {
        getters: stores,
      });

      export function useStore(){
        return store()
      }
      ```

  3. 使用store
  
      就像使用普通第三方库一样，导入一个`useStore`方法就能使用了。
   
     ```html
     // /src/layout/WorkSpaceLayout.vue
     <template>
       <!-- ... -->
         <LayoutWorkMenu :collapse="!showAside" />
       <!-- ... -->
     </template>
     
     <script lang="ts" setup>
       import { useStore } from "@/store";
       import { computed } from "vue";
       import LayoutWorkMenu from "./components/LayoutWorkMenu.vue";

       // store的数据并不是一定是响应式的(除非你定义的时候就具有reactive特性)
       // 因此你需要对其进行reactive处理
       // 使用computed是一个好办法,有时候还能使用toRef
       const showAside = computed(() => useStore().app.showAside);
     </script>
     ```

 2. 修改store的值

    因为项目使用了pinia，所以也就没有Mutation这个概念了，提交action的目的就是修改store.

    ```ts
    // /src/layout/WorkSpaceLayout.vue
    function onActionClick() {
      useStore().app.setAsideVisible(!showAside.value);
    }
    ```

* 路由注册
  
  开发者开发业务界面的重点是一个页面，而不是既要考虑业务内容又要考虑挂载的节点。

  我们给路由组件扩展属性增加了两个功能，这是在路由配置的时候可以特定设置的
 
  ```ts
  interface RouteMeta {
    // 是忽略身份权限
    ignoreAuth: boolean;
    // 默认为WorkSpace
    layout?: PageLayout;
  }
  ```

  在使用的时候，根据产品设计的业务实际情况设定即可。

  > 大多数业务系统的菜单都是按照模块进行分类的，所以可以创建以模块为单位的路由配置

  ```
  src
    - router
      - routes
        index.ts
        [module].routes.ts  // 路由模块
      index.ts
  ```

  ``` ts
  // /src/router/routes/system.routes.ts
  import { RouteRecordRaw } from "vue-router";
  export const SystemRoutes: Array<RouteRecordRaw> = [
    {
      path: "/system/organize/users",
      name: "users",
      component: () => import("@/views/system/organizational-management/OrganizationUsersView.vue"),
    },
  ]

  // /src/router/routes/index.ts

  import HomeView from "../../views/HomeView.vue";
  import { RouteRecordRaw } from "vue-router";
  import { SystemRoutes } from './system.routes';

  const routesConfig: Array<RouteRecordRaw> = [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        ignoreAuth: true,
        layout: "Basic",
      },
    },
    // ... others modules
    ...SystemRoutes,
    // ...
  ]

  export default routesConfig;
  ```

