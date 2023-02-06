export * from './dark'

/** 阻止事件分发 */
export function stopEventDispath(event: MouseEvent) {
  event.stopPropagation()
  return false
}
