/**
 * 判断对象是否为空
 * @param obj 要验证的对象
 * @description 如果是数组，请使用length判断
 */
export function isEmpty(obj: Object) {
  return Object.keys(obj).length > 0
}
