import { readonly, ref } from "vue";
import { RequestParams } from "@gopowerteam/http-request";
import { UserService } from "@/services/user.service";
import { firstValueFrom } from "rxjs";
import { MenuItem } from "@/types/menu.type";
import { UserBase, UserRole } from "@/types/user.type";
import { store } from "@/store";

/**
 * 登录表单实体
 */
export interface LoginModel {
	uname: string;
	pwd: string;
}

/**
 * 登录返回
 */
export interface LoginRes extends UserBase, UserRole {
	token: string;
	menu: MenuItem[];
}

export const model = ref<LoginModel>({
	uname: "",
	pwd: "",
});

export const rules = readonly({
	uname: { required: true, message: "请输入用户名", trigger: "change" },
	pwd: { required: true, message: "请输入密码" },
});

const service = new UserService();
const params = new RequestParams();

/**
 * login
 */
export function login() {
	params.data = {
		password: model.value.pwd,
		username: model.value.uname,
	};

	return firstValueFrom(service.login(params))
		.then(saveUserData)
		.catch(() => false);
}

function saveUserData(data: LoginRes) {
	store.commit("user/updateUserInfo", data);
	store.commit("updateLoginTime", Date.now());
	return true;
}

/**
 * 重置sotre
 */
export function resetStore() {
	store.commit("updateLoginTime", -1);
	store.commit("user/updateUserInfo", {});
}
