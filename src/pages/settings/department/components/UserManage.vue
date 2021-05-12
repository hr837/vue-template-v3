<template>
	<div class="user-manage">
		<UserQueryForm />
		<DataBoxAction>
			<template #buttons>
				<el-button type="primary" @click="onAdd">新增用户</el-button>
				<el-button type="primary">批量分配角色</el-button>
				<el-button type="primary">批量重置密码</el-button>
			</template>
		</DataBoxAction>
		<UserList />
		<UserModify />
		<SelectRole />
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import UserQueryForm from "./UserQueryForm.vue";
import UserModify from "./UserModify.vue";
import UserList from "./UserList.vue";
import SelectRole from "./SelectRole.vue";
import { onAdd, refreshData } from "../composables/user";
import type { UserRole } from "@/types/user.interface";
</script>
