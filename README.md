
# vue3+typescript+webpack模板项目

[![node](https://img.shields.io/node/v/webpack.svg)](https://nodejs.org)
[![typescript](https://img.shields.io/badge/typescript-4.5-blue)](https://www.typescriptlang.org/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<a href="https://github.com/ngryman/cz-emoji">
    <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg" alt="Gitmoji">
</a>
[![gitmoji-changelog](https://img.shields.io/badge/Changelog-gitmoji-brightgreen.svg)](https://github.com/frinyvonnick/gitmoji-changelog)




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
* Build Tools--[Webpack 5](https://www.webpackjs.com/concepts/) 虽然Vite很快，但是大部分插件都不是正式版。详细的Webpack文档，可以帮助你理解并处理大部分构建相关的难题。
* ScriptLang-- [Typescript 4](https://www.typescriptlang.org/) 在这里并非万物皆any。
* Vue-- [Vue 3](https://cn.vuejs.org/)，推荐使用script-setup方式，也可以使用defineComponet方式写Vue3 setup方式或者Vue2的声明风格的方式。
* Store-[Pinia 2](https://pinia.vuejs.org/zh/getting-started.html) 模板使用需要对state进行ref才可以响应式呈现
* Router-[VueRouter 4](https://router.vuejs.org/zh/guide/)
* UI-- [Element-plus 2](https://element-plus.gitee.io/zh-CN/guide/changelog.html) 写法基本不变
* CSS--[Tailwind.css 3](https://www.tailwindcss.cn/docs) CSS 预置类，保持项目整体风格。
* Icon--[Iconify](https://iconify.design)

<br>

### 开发所用的IDE插件

| 插件名称                                                                                                    | 插件ID                     | 说明                                                     |
| ----------------------------------------------------------------------------------------------------------- | -------------------------- | -------------------------------------------------------- |
| [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)                                      | Vue.volar                  | Language support for Vue  3                              |
| [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)  | bradlc.vscode-tailwindcss  | Intelligent Tailwind CSS tooling for VS Code             |
| [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)                        | dbaeumer.vscode-eslint     | Integrates ESLint JavaScript into VS Code.               |
| ~~[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)~~ | ~~esbenp.prettier-vscode~~ | ~~Code formatter using prettier~~                        |
| [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)                   | antfu.iconify              | Intelligent Iconify previewing and searching for VS Code |
| [EditConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)                 | EditorConfig.EditorConfig  | EditorConfig Support for Visual Studio Code              |

<br>

### 文件命名规范：

Vue文件推荐大写字母开头命名，
* 页面命名推荐业务名称+View结尾
* 组件命名推荐Page名称+模块名称。

其他文件命名尽量使用其目录中已有文件一致的命名方式。

例如：
page:   HomeView.vue,
compoents:  HomeReport.vue,   HomeReportLineChart.vue

<br>

### 组件开发

* #### 组件的书写模式

  在script setup书写模式下，不需要注册组件即可使用。

  ``` html
  <script lang="ts" setup>
  import { ref } from 'vue'
  import LayoutWorkMenu from "./components/LayoutWorkMenu.vue";

  const showAside = ref(true);
  </script>

  <template>
    <!-- ... -->
    <div>
      <!-- ... -->
    <LayoutWorkMenu :collapse="!showAside" />
    </div>
  </template>
  ```
  <br>

  在defineCompoent 模式，需要注册组件。

  ``` html
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

  <template>
    <!-- ... -->
    <div>
      <!-- ... -->
    <LayoutWorkMenu :collapse="!showAside" />
    </div>
  </template>

  <style lang="less" scoped>
    /* ... */
  </style>
  ```

<br>

* #### 使用Icon

  当前项目已经集成了[Iconify](https://iconify.design)图标库，已安装的图标集合有[@iconify-json/icon-park-outline](https://www.npmjs.com/package/@iconify-json/icon-park-outline)

  ```html
  <template>
    <!-- icon-park-outline 图标库中的 config 图标-->
    <icon-park-outline-config class="text-red-400" />
    <!-- 本地svg图标库中的 bankcard svg-->
    <icon-local-bankcard class="text-green-400" /></li>
  </template>
  ```

  > 已经配置自动引入，使用图标需要标签以`icon`开始

  如果需要使用`icon-park`的图标，你可以参照[IconPark官方图标文档](http://iconpark.oceanengine.com/official)，复制其名称使用。
  如果需要使用本地svg图标，你需要将你的图标放在 `/src/assets/icons/` 目录下面。 tips:下载的svg图标最好删除width,height属性。



<br>

* 组件属性声明

  推荐使用`type`定义该组件的属性，记得写好属性字段的备注，有[unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)插件的支持,在父组件调用的时候将具有属性字段文档提示。

  ``` ts
  // ./components/WorkSpaceMenu.vue
  import { defineProps } from 'vue'
  interface PropType {
    /** 是否折叠菜单 */
    collapse: boolean
  }
  defineProps<PropType>()
  ```

  如果你的属性定义需要设置默认值，那你需要引入`withDefaults`结合`defineProps`使用
  ```ts
  import { defineProps, withDefaults } from 'vue'

  // ...
  withDefaults(defineProps<PropType>(), {
    collapse: false,
  })
  ```

  <br>

* 给父组件发送事件

  事件的注册方式还随之前写法一样使用`v-on`或者`@`指令

  > 后续示例都将使用`setup`语法，`defineComponent`方式请查阅[Vue](https://cn.vuejs.org/)官方文档。

  ```ts
  // ./components/WorkSpaceMenu.vue
  import { defineEmits } from 'vue'

  const emitter = defineEmits(['onMenuClick'])
  function onMenuSelect() {
    // ...
    emitter('onMenuClick', { data: 'xxx' })
  }
  ```
<br>

* 组件内请求后端接口数据

  ```ts
  import type { UserModel } from '@/http/models/user.model'
  import { type QueryUserInput } from '@/http/services/UserService'

  // the template form component bind object
  const queryModel = reactive<QueryUserInput>({
    username: '',
    createdAt: '',
  })

  // the template table component bind datasrouce
  const dataList = ref<UserModel[]>([])
  // service instance
  const service = new UserService()

  // the request method
  function queryHandle() {
    service.findUser(queryModel).then((data) => {
      dataList.value = data
    })
  }

  // using async await might simplify the structure of the function
  async function QueryHandleType2() {
    await service.findUser(queryModel)
    dataList.value = data
  }

  // send a http request on component mounted
  onMounted(queryHandle)
  ```
<br>

* 使用store

  > 非同根跨级节点建议不使用store，非global数据不建议使用store

1. 定义store

    ```ts
    // /src/store/app.store.ts
    interface State {
      /** 是否显示左侧菜单 */
      showAside: boolean
    }

    // 初始化的数据
    const initialState: State = {
      showAside: true,
    }

    /** application store */
    export const useAppStore = defineStore('app', {
      state: () => initialState,
      actions: {
        /** 设置左侧菜单可见性 */
        setAsideVisible(visible: boolean) {
          this.showAside = visible
        },
      }
    })
    ```

  1. 注册到store根实例

      ```ts
      // /src/store/index.ts
      import { useAppStore } from './app.store'
      const stores = {
        app: () => useAppStore(),
      }

      const store = defineStore('main', {
        getters: stores,
      })

      export function useStore() {
        return store()
      }
      ```

  2. 使用store

      就像使用普通第三方库一样，导入一个`useStore`方法就能使用了。

     ```html
     <!-- /src/layout/WorkSpaceLayout.vue -->
     <template>
       <!-- ... -->
         <LayoutWorkMenu :collapse="!showAside" />
       <!-- ... -->
     </template>

     <script lang="ts" setup>
       import { useAppStore } from "@/store/app.store";
       import { computed } from "vue";
       import LayoutWorkMenu from "./components/LayoutWorkMenu.vue";

       const appStore = useAppStore()

       // store的数据并不是一定是响应式的(除非你定义的时候就具有reactive特性)
       // 因此你需要对其进行reactive处理
       // 使用computed是一个好办法,有时候还能使用toRef
       const showAside = computed(() => appStore.showAside);
     </script>

     ```
     > 如果只是明确的使用某个store,就应该只导入当前使用的store，而不是使用根store

 1. 修改store的值

    因为项目使用了pinia，所以也就没有Mutation这个概念了，提交action的目的就是修改store.

    ```ts
    // /src/layout/WorkSpaceLayout.vue
    function onActionClick() {
      appStore.setAsideVisible(!showAside.value)
    }
    ```

<br>

* 路由注册

  开发者开发业务界面的重点是一个页面，而不是既要考虑业务内容又要考虑挂载的节点。

  我们给路由组件扩展属性增加了两个功能，这是在路由配置的时候可以特定设置的

  ```ts
  interface RouteMeta {
    /** 是否忽略身份权限,默认为不忽略 */
    ignoreAuth?: boolean
    /** 布局模式，默认为WorkSpace */
    layout?: PageLayout
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

  ```ts
  // /src/router/routes/system.routes.ts
  import { RouteRecordRaw } from 'vue-router'

  export const SystemRoutes: Array<RouteRecordRaw> = [
    {
      path: '/system/organize/users',
      name: 'users',
      component: () => import('@/views/system/organizational-management/OrganizationUsersView.vue'),
    },
  ]
  ```

  ``` ts
  // /src/router/routes/index.ts

  import { RouteRecordRaw } from 'vue-router'
  // Risky, Don't be like me.
  import HomeView from '../../views/HomeView.vue'
  import { SystemRoutes } from './system.routes'

  const routesConfig: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        ignoreAuth: true,
        layout: 'Basic',
      },
    },
    // ... others modules
    ...SystemRoutes,
    // ...
  ]

  export default routesConfig
  ```

