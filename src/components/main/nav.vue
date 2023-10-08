<template>
  <div class="nav">
          <div class="l-content">
            <el-input
              v-model="input2"
              class="w-50 m-2"
              placeholder="Please Input"
              :prefix-icon="Search"
            />
          </div>
          <div class="r-content">
            <div>
              <remind theme="outline" size="24" fill="#333" />
            </div>
            <div>
              <accept-email theme="outline" size="24" fill="#333" />
            </div>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <div class="user"></div>
              </span>
              <!-- <el-dropdown-menu #dropdown>
                <el-dropdown-item icon="el-icon-plus"
                  >用户中心</el-dropdown-item
                >
                <el-dropdown-item icon="el-icon-circle-plus" @click.native="exit"
                  > 退出</el-dropdown-item
                >
              </el-dropdown-menu> -->
            </el-dropdown>


            <div>用户名</div>
          </div>
        </div>
</template>
<script setup>
import { AcceptEmail, Remind } from "@icon-park/vue-next";
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";

const input2=ref("")
</script>
<style lang="less" scoped>
.right {
  // display: fl;
  // flex: 1;
  width: 100%;
  background-color: white;
  // height: 100%;
  overflow: hidden;
  // 导航栏
  .nav {
    width: 100%;
    // height: 100%;
    height: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .l-content {
      display: flex;
      align-items: center;
    }
    .el-input {
      margin: 20px;
    }

    .r-content {
      display: flex;
      align-items: center;
      margin-right: 100px;
      div {
        margin-right: 30px;
        &:nth-child(3) {
          margin-right: 10px;
          margin-left: 20px;
        }
        &:last-child {
          margin: 0;
        }
      }
      .user {
        background-image: url("../../assets/img/user.png");
        width: 44px;
        height: 44px;
        border-radius: 50%;
        background-size: cover;
      }
    }
  }

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


</style>