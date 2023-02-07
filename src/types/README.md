
# 类型定义目录说明

 业务里面需要的类型都可以在这个目录下定义，以增加复用性

定义说明：使用`type`或者`interface`关键字都可以，看自己的使用习惯。

```ts
/** 数字输入格式 */
export type NumberInputType = Number | String | ''

export interface QueryForm {
  /** 用户名 */
  name: string
  /** 创建时间 */
  time: string
}
```

> 以上内容代表示例，并非实际使用代码。

使用类型定义推荐写好注释，时间长了你也会忘记复杂的成员含义对吧？

