import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Mockjs from "mockjs";

import UserController from "@/config/controllers/user.controller";
import DepartmentController from "@/config/controllers/department.controller";

const mock = new MockAdapter(axios);

// login
mock.onPost(UserController.login.path).reply(200, {
	token: "REASDF",
});

mock.onGet(DepartmentController.queryDepatrment.path).reply(
	200,
	// Mockjs.mock({
	// 	"data|20": [
	// 		{
	// 			"name|1": "@ctitle",
	// 			"business|1": "@CNAME",
	// 			"amount|500-8000.2": 1,
	// 			"account|20-1000": 1,
	// 		},
	// 	],
	// 	"total|20-100": 1,
	// })
	{
		data: [
			{
				name: "213",
			},
		],
		total: 99,
	}
);
