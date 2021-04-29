module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		sourceType: "module",
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-essential",
		"prettier",
	],
	globals: {
		document: true,
		localStorage: true,
		window: true,
		global: true,
		module: true,
	},
	rules: {
		"@typescript-eslint/ban-types": "off",
	},
};
