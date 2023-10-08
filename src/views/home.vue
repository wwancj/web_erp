<template>
  <div class="app">
    <div class="main">
      <div class="aside">
        <div>
          <div class="logo"></div>
          <div class="font">TOUCK</div>
          <div class="main_menu">MAIN MENU</div>
          <div class="mm">
            <left_menuVue />
          </div>

          <div class="model">
            <el-divider></el-divider>

            <el-switch
              v-model="value"
              size="large"
              active-text="深色模式"
              inactive-text="浅色模式"
            />
          </div>
        </div>
      </div>
      <div class="right">
        <mynav />
        <div class="content">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import mynav from "@/components/main/nav.vue";
import left_menuVue from "@/components/main/left_menu.vue";
import { ref } from "vue";
const input2 = ref("");

const value = ref(false);
</script>

<style lang="less">
// 左侧菜单

.mm {
  flex-grow: 1;
}
.main1 {
  background: #fff;
  height: 100%;
  width: 100%;
}

h5 {
  padding-left: 8px;
  font-size: 16px;
  color: #888888;
}
.app {
  padding: 20px;
  // padding-bottom: 0;
  background-color: #959595;
  box-sizing: border-box;
  height: 100vh;
  // overflow: hidden;
}

.aside {
  height: 100%;
  width: 14%;
  background-color: white;
  box-sizing: border-box;
  overflow: hidden;
  display: inline-block;

  .model {
    margin-bottom: 40px;
    // align-self: flex-end;
  }
  > div {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    //   align-items: center;
  }
  .logo {
    // background-image: url(../assets/img/logo1.png);
    background-image: url("https://pinia.vuejs.org/logo.svg");
    width: 66px;
    height: 66px;
    background-size: cover;
    margin: 50px auto;
    margin-bottom: 0;
  }
  .font {
    width: 100%;
    height: 42px;
    font-size: 30px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 35px;
    -webkit-background-clip: text;
    text-align: center;
    // -webkit-text-fill-color: transparent;
  }
  .main_menu {
    width: 150px;
    height: 22px;
    font-size: 16px;
    font-family: PingFang SC-Bold, PingFang SC;
    font-weight: bold;
    color: #959595;
    line-height: 19px;
    -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    margin-top: 10px;
  }
}
.main {
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  height: 100%;
}

// 右侧导航栏
.right {
  // display: fl;
  // flex: 1;
  width: 100%;
  background-color: white;
  // height: 100%;
  overflow: hidden;
  // 导航栏

  // 内容
  .content {
    background: #f1f3f8;
    width: 100%;
    height: 92%;
    padding: 15px;
    box-sizing: border-box;

    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both;
    }

    .box-card {
      width: 480px;
    }
  }
}

// user下拉菜单
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.finish {
  // background-color: black;
  margin-left: 175px;
  // background-color: #efefef;
  width: 172px;
  height: 48px;
  background: #efefef;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;
  line-height: 48px;
  button {
    display: inline-block;
    border: 0;
    margin-left: 20px;
    color: #7b7b7b;
    width: 60px;
    height: 34px;
    &:last-child {
      color: #4987ff;
      background-color: #fff;
      border-radius: 15px;
    }
  }
}
.clearfix {
  display: flex;
  > span {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    width: 90px;
  }
}
</style>
