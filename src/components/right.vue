<template>
  <div class="right">
    <h2>Welcome Back</h2>
    <h3>企业管理系统</h3>
    <div class="login_form">
      <!-- <input type="text" placeholder="用户名" class="forms_input">
                <input type="password" placeholder="密码" class="forms_input"> -->

      <form>
        <el-input
          placeholder="用户名"
          v-model="loginmessage.name"
          class="forms_input"
        >
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
        <el-input
          placeholder="密码"
          v-model="loginmessage.password"
          class="forms_input"
          type="password"
        >
          <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
        </el-input>
      </form>

      <div class="remind">
        <div><input type="checkbox" />记住密码</div>
        <span>忘记密码？</span>
      </div>
      <!-- <transition name="fade" mode="out-in"></transition> -->
      <button class="loginUp" @click="to_home">登录</button>
      <button class="signUp" @click="login.islogin=false">注册</button>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { loginStore } from "@/mypinia/store";
import { useRouter } from "vue-router";

let router=useRouter()
function to_home(){
    router.push("/home")
}

const loginmessage = reactive({
  name: "",
  password: "",
});
let login=loginStore()
</script>

<style scoped lang="less">
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.right {
  width: 50%;
  height: 100%;
  background-color: white;
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  h2 {
    width: 353px;
    height: 67px;
    font-size: 48px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #8b8b8b;
    line-height: 56px;
    -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    margin: 0;
    // position: absolute;
    // top: 40px;
    margin-top: 40px;
  }
  h3 {
    width: 216px;
    height: 50px;
    font-size: 36px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #000000;
    line-height: 42px;
    -webkit-background-clip: text;
    margin: 0;
    // -webkit-text-fill-color: transparent;
    // position: absolute;
    // top: 120px;
    // margin-top: 120px;
  }
  .login_form {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    :deep(.el-input__inner){
      border-radius: 5px;
      height: 50px;
    }

    .forms_input {
      width: 359px;
      height: 46px;
      outline: none;
      // border: 1px solid #333;

      border-radius: 10px;
      margin-bottom: 26px;
      // padding-left: 40px;
      .el-input__inner {
        border-radius: 5px;
        height: 50px;
      }
      .el-input__icon {
        line-height: 50px;
        color: #6b6b6b;
        font-size: 20px;
      }
    }
    .remind {
      display: flex;
      justify-content: space-between;
      > div {
        color: #929292;
        font-size: 14px;
        input {
          width: 10px;
          height: 10px;
        }
      }
      > span {
        color: #4987ff;
        font-size: 14px;
      }
      margin-bottom: 40px;
    }
    button {
      // width: 100%;
      height: 50px;
      font-size: 24px;
      font-family: PingFang SC-Bold, PingFang SC;
      // font-weight: bold;
      color: white;
      line-height: 35px;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      background-color: #4987ff;
      border-radius: 40px;
      border: none;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
}
</style>
