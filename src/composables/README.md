# 组合业务目录使用说明

常用且简单的业务逻辑或者方法可以在`index.ts`导出

```ts
/**
 * 时间格式化 -- 示例
 * @param val 要格式化的日期数据
 */
export function dateFormat(val: string | number | Date) {
  // ...
  return 'balabala'
}
```

其他专属组合文件需要单独引用到组件中

