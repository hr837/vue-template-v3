module.exports = {
	root: true,
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2020,
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
		extraFileExtensions: [".vue"],
	},
	plugins: ["@typescript-eslint"],
	extends: [
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
		"plugin:prettier/recommended",
	],
	globals: {
		document: "readonly",
		localStorage: "readonly",
		window: "readonly",
		global: "readonly",
	},
	rules: {
		"vue/html-indent": "off",
		"@typescript-eslint/ban-types": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"@typescript-eslint/no-unused-vars": "off",
	},
};
