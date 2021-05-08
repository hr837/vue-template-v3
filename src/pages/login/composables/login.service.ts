import { RequestParams } from "@gopowerteam/http-request";
import { UserService } from "@/services/user.service";
// import { RequestParams } from "@gopowerteam/http-request";
import { LoginModel } from "./login.type";

export function login(model: LoginModel) {
	const params = new RequestParams({
		userName: model.uname,
		password: model.pwd,
	});

	return new UserService()
		.login(params)
		.toPromise()
		.then((data) => {
			console.log(data);
			return true;
		})
		.catch(() => {
			return false;
		});
}
