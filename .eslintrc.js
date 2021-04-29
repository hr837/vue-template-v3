module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    "prettier"
  ],
	globals:{
    document: true,
    localStorage: true,
    window: true,
    global:true,
    module:true
	},
	rules:{
		"@typescript-eslint/ban-types": 'off'
	}
};