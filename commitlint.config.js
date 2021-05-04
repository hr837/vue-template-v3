// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("cz-emoji/lib/types.json");
const types = config.map((type) => type.code);

module.exports = {
	extends: ["@commitlint/config-conventional"],
	parserPreset: {
		parserOpts: {
			headerPattern: /^(:\w*:)(?:\s)(?:\((.*?)\))?\s((?:.*(?=\())|.*)(?:\(#(\d*)\))?/,
			headerCorrespondence: ["type", "scope", "subject", "ticket"],
		},
	},
	rules: {
		"type-enum": [2, "always", types],
	},
};
