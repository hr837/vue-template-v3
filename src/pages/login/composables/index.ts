import { readonly, ref } from "vue";
import { RequestParams } from "@gopowerteam/http-request";
import { UserService } from "@/services/user.service";
import { firstValueFrom } from "rxjs";
import { MenuItem } from "@/types/menu.type";
import { UserBase, UserRole } from "@/types/user.type";
import { getStore } from "@/store";

/**
 * 登录表单实体
 */
export type LoginModel = {
	uname: string;
	pwd: string;
};

export type LoginRes = {
	token: string;
	menu: MenuItem[];
} & UserBase &
	UserRole;

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
const store = getStore("user");
const baseStore = getStore();

function saveUserData(data: LoginRes) {
	console.log(123);
	store.commit("updateUserInfo", data);
	baseStore.commit("updateLoginTime", Date.now());
	return true;
}
