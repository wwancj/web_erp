<template>
  <div class="register_right2">
    <div class="r_content">
      <h2>注册账户</h2>
      <div class="sign_form">
        <form>
                 <el-input placeholder="请输入邮箱" class="forms_input" v-model="email">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
        <el-input placeholder="输入密码" class="forms_input" type="password" v-model="first_pwd">
          <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
        </el-input>
        <el-input placeholder="确认密码" class="forms_input" type="password" v-model="second_pwd">
          <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
        </el-input>
        <el-input placeholder="验证码" class="forms_input" v-model="code">
          <i slot="prefix" class="el-input__icon el-icon-loading"></i>
          <template slot="append" style="cursor: pointer;">
            <div @click="getVerify" style="cursor: pointer;">点击获取</div>
            
            </template>
        </el-input>
        </form>
 

        <button @click="register">点击注册</button>
        <button @click="login.islogin=true">返回登录</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { loginStore } from "@/mypinia/store";



  let data=reactive({
 email:"",
 first_pwd:"",
 second_pwd:""
  })

  let a=1
  let login=loginStore()

</script>

<style scoped lang="less">
.register_right2 {
  position: absolute;
  left: 639px;
  top: 60%;
  transform: translateX(-50%) translateY(-50%);
  
  .r_content {
    // width: 100px;
    // height: 100px;
    // background: pink;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    // transition: all 0.3s;
    h2 {
      width: 144px;
      height: 50px;
      font-size: 30px;
      font-family: PingFang SC-Bold, PingFang SC;
      // font-weight: bold;
      color: #ffffff;
      line-height: 42px;
      -webkit-background-clip: text;
      position: absolute;
      top: -25%;
      // -webkit-text-fill-color: transparent;
    }
    .sign_form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 340px;
      :deep(.el-input__inner) {
        background-color: transparent;
      }
      .forms_input {
        margin-bottom: 30px;
        background-color: transparent;
        border: 0;
        color: white;
      }
      button {
        width: 100%;
        height: 50px;
        font-size: 24px;
        font-family: PingFang SC-Bold, PingFang SC;
        // font-weight: bold;
        color: white;
        line-height: 35px;

        background-color: #4987ff;
        border-radius: 40px;
        border: none;
        cursor: pointer;
        margin-bottom: 20px;
        &:last-child {
          background: white !important;
          border: 1px solid #8b8b8b !important;
          color: #4987ff !important;
        }
      }
    }
  }
}
</style>
