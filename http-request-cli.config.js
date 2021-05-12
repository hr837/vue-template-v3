module.exports = {
	gateway: "http://localhost:9000",
	apiVersion: "v3",
	controllerDir: {
		alias: "@/config/controllers",
		path: "./src/config/controllers",
	},
	serviceDir: {
		alias: "@/http/services",
		path: "./src/services",
	},
	services: {
		"common-service": "common",
	},
};
