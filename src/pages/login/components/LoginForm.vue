<template>
	<div class="login-form">
		<p class="login-form_titie g-c-primary">欢迎登录</p>
		<el-form
			ref="form"
			class="login-form_form"
			size="medium"
			:model="model"
			:rules="rules"
			@keyup.enter="submit"
		>
			<el-form-item prop="uname">
				<el-input v-model="model.uname" prefix-icon="el-icon-user" />
			</el-form-item>
			<el-form-item prop="pwd">
				<el-input
					v-model="model.pwd"
					type="password"
					prefix-icon="el-icon-unlock"
				/>
			</el-form-item>
		</el-form>
		<el-checkbox v-model="checked" class="login-form_checkbox">
			记住账号和密码
		</el-checkbox>
		<el-button
			size="medium"
			class="login-form_button"
			type="primary"
			@click="submit"
		>
			登录
		</el-button>
	</div>
</template>

<script lang="ts" setup>
import { ref, defineEmit } from "vue";
import { rules, model } from "../composables";

const emit = defineEmit(["validated"]);
const checked = ref(false);

const form = ref<ElFrom>();

const submit = async function submit() {
	const result = await form.value?.validate();
	if (!result) return;
	emit("validated", model.value);
};
</script>

<style lang="less">
.login-form {
	width: 448px;
	padding: 0 40px;
	border-radius: 0 8px 8px 0;
	@itemHeight: 56px;

	.fontSize {
		font-size: 20px;
	}

	&_titie {
		margin-top: @itemHeight;
		font-size: 28px;
		font-weight: bold;
	}
	&_checkbox {
		.el-checkbox {
			&__input {
				line-height: 19px;
			}
			&__label {
				.fontSize();
			}
		}
	}
	&_button {
		margin-top: 48px;
		width: 100%;
		height: @itemHeight;
		font-weight: bold;
		.fontSize();
	}
	&_form {
		.el-form-item--medium {
			.el-input.el-input--prefix {
				.el-input__inner,
				.el-input__prefix {
					height: @itemHeight;
					line-height: @itemHeight;
					.fontSize();
				}
				.el-input__prefix {
					padding: 0 15px;
					left: 0;
					color: #333333;
				}
				.el-input__inner {
					padding-left: 55px;
				}
			}
		}
	}
}
</style>
