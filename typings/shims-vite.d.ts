/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** HTTP 网关地址 */
  readonly VITE_HTTP_GETWAY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
