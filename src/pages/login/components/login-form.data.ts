import { readonly, ref } from "vue";
import type { LoginModel } from "../login.type";

export const model = ref<LoginModel>({
	uname: "",
	pwd: "",
});

export const rules = readonly({
	uname: { required: true, message: "请输入用户名", trigger: "change" },
	pwd: { required: true, message: "请输入密码" },
});
