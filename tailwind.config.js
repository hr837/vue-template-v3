/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: [
      {
        getCSS: () => `
          .el-button {
            background-color: var(--el-button-bg-color, var(--el-color-white))
          }
        `,
      },
    ],
  },
}
