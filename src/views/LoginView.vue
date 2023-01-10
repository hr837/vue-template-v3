<template>
  <div class="login">
    <div class="header-box">
      <div class="grid-box">
        <div class="grid1" />
        <div class="grid2" />
        <div class="gridLine" />
        <div class="grid3" />
      </div>
    </div>
    <el-form ref="loginRef"
             :model="loginForm"
             :rules="loginRules"
             class="login-form">
      <div class="login-form-header">
        <span class="title">{{ appTitle }}</span>
        <span class="title-sub">欢迎登录</span>
      </div>
      <el-form-item prop="username">
        <el-input v-model="loginForm.username"
                  type="text"
                  size="large"
                  auto-complete="off"
                  placeholder="请输入用户名/手机号码">
          <template #prefix>
            <icon-park type="User" />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="loginForm.password"
                  type="password"
                  size="large"
                  auto-complete="off"
                  placeholder="请输入密码"
                  maxlength="20">
          <template #prefix>
            <icon-park type="User" />
            <!-- <svg-icon icon-class="password" class="el-input__icon input-icon" /> -->
          </template>
        </el-input>
      </el-form-item>
      <verify-code :show="isShow"
             @success="onSuccess"
             @close="onClose"
             @fail="onFail" />
      <el-form-item style="width: 100%">
        <el-button :loading="loading"
                   size="large"
                   type="primary"
                   style="width: 100%"
                   @click="handleLogin(loginRef)">
          <span v-if="!loading">登 录</span>
          <span v-else>登 录 中...</span>
        </el-button>
      </el-form-item>
    </el-form>
    <img src="/images/login/bg_login.jpg" alt="" width="100px"> 
  </div>
</template>

<script lang="ts" setup  >
import VerifyCode from "vue3-puzzle-vcode";
import { useRouter } from 'vue-router'
import { ref,reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const router = useRouter();
const appTitle = '创格平台'
const loginForm = ref({
  username: '',
  password: '',
});
const loginRef = ref<FormInstance>()
const loginRules = reactive<FormRules>({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入用户名/手机号码',
    },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      message: '请输入密码',
    },
  ],
});
const loading = ref(false);
const isShow = ref<boolean>(false)
const msg_onSuccess = ref('')
const passInfr = ref('点击完成验证')
function onSuccess(msg: string) {
  isShow.value = false; // 通过验证后，需要手动隐藏模态框
  msg_onSuccess.value = msg
  if (msg_onSuccess.value) {
    passInfr.value = "验证通过"
    handleLogin(loginRef.value)
  }
}
function onClose() {
  isShow.value = false;
}
function onFail() {
  isShow.value = true;
}
/**
 * 登陆
 */
async function handleLogin(formEl: FormInstance | undefined) {
  
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if (!msg_onSuccess.value) {
        isShow.value = true;
        return
      }
      loading.value = true;
      router.push('/');
    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>

<style lang="less" scoped>
.login {
  height: 100%;
  min-width: 780px;
  background: url("../../public/images/login/bg_login.jpg") center center no-repeat;
  background-size: 100% 100%;
  position: relative;

  .header-box {
    width: 100%;
    height: 160px;
    position: relative;

    .grid-box {
      width: 692px;
      height: 56px;
      position: absolute;
      top: 15%; // 由于用户屏幕缩放150 由25%调成15%
      left: 50%;
      transform: translateX(-50%);

      .grid1 {
        width: 208px;
        height: 56px;
        // background: url("./images/login/login_logo_df.png") center no-repeat;
        background-size: 80% 80%;
        // background-size:cover;
        float: left;
        // margin-right: 40px;
      }

      .grid2 {
        width: 210px;
        height: 52px;
        // background: url("./images/login/login_logo_cg2.png") center no-repeat;
        background-size: 80% 80%;
        float: left;
        margin-top: 3px;
        margin-right: 20px;
      }

      .gridLine {
        width: 1px;
        height: 48px;
        background-color: #b5bac0;
        float: left;
        margin-top: 4px;
        margin-right: 20px;
      }

      .grid3 {
        width: 170px;
        height: 56px;
        // background: url("./images/login/car.png") center no-repeat;
        background-size: 80% 80%;
        float: left;
      }
    }
  }

  .login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 352px;
    padding: 25px 25px 5px 25px;
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-30%, -40%);

    .el-input {
      height: 40px;

      input {
        height: 40px;
      }
    }

    .input-icon {
      height: 39px;
      width: 14px;
      margin-left: 0px;
    }

    .login-form-header {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      margin-bottom: 30px;

      .title {
        color: var(--el-color-primary);
        font-size: 24px;
        margin-bottom: 10px;
      }

      .title-sub {
        color: #666;
        font-size: 16px;
        position: relative;
        width: 96px;

        &::before {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          width: 5px;
          height: 5px;
          background-color: #666;
          border-radius: 50%;
        }

        &::after {
          content: "";
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          width: 5px;
          height: 5px;
          background-color: #666;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>
