module.exports = {
	extends: ["@commitlint/config-conventional"],
	/*
	 * Custom prompt configs
	 */
	prompt: {
		messages: {},
		questions: {
			type: {
				description: "please input type:",
			},
		},
	},
};
