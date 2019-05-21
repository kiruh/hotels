"use strict";

const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
	parser: "babel-eslint",
	extends: ["airbnb", "plugin:prettier/recommended"],
	rules: {
		"react/jsx-indent": [ERROR, "tab"],
		"react/jsx-indent-props": [ERROR, "tab"],
		"react/jsx-one-expression-per-line": OFF,
		"linebreak-style": OFF,
	},
	settings: {
		"import/resolver": {
			webpack: {
				config: "webpack.config.js",
			},
		},
	},
	env: {
		browser: true,
	},
};
