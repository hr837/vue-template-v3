<template>
	<el-avatar :src="userInfo.avatar"></el-avatar>
	<el-dropdown class="user-dropdown" trigger="click" @command="onCommand">
		<span class="el-dropdown-link">
			{{ userInfo.name }}
			<i class="el-icon-arrow-down el-icon--right"></i>
		</span>
		<template #dropdown>
			<el-dropdown-menu class="user-dropdown_menu">
				<!-- <el-dropdown-item command="password" icon="el-icon-plus">
					修改密码
				</el-dropdown-item> -->
				<el-dropdown-item command="exit" icon="el-icon-circle-check">
					退出
				</el-dropdown-item>
			</el-dropdown-menu>
		</template>
	</el-dropdown>
</template>

<script lang="ts" setup>
import { computed } from "@vue/runtime-core";
import faker from "faker";
import { useRouter } from "vue-router";

const router = useRouter();
const avatar = faker.image.avatar();

const userInfo = computed(() => {
	return {
		avatar: faker.image.avatar(),
		name: `${faker.name.firstName()} ${faker.name.lastName()}`,
	};
});

const onCommand = function (command: string) {
	switch (command) {
		case "exit":
			router.push("/login");
			break;
	}
};
</script>

<style lang="less">
.user-dropdown {
	margin-left: 20px;
	.el-dropdown-link {
		font-weight: bold;
	}
	&_menu {
		width: 160px;
	}
}
</style>
