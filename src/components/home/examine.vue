<template>
  <div class="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>公告</span>
        <el-button type="primary">更多</el-button>
      </div>
      <div class="text">
        <div class="item">
          <div class="img">
            <people theme="filled" size="60" fill="#fff" />
          </div>
          <div>
            <div class="title">南昌出差费用报销</div>
            <div class="message"> 报销申请单</div>
          </div>
          <div class="wait">待批阅</div>
        </div>
         <div class="item">
          <div class="img">
            <people theme="filled" size="60" fill="#fff" />
          </div>
          <div>
            <div class="title">南昌出差费用报销</div>
            <div class="message"> 报销申请单</div>
          </div>
          <div class="wait">待批阅</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { People } from "@icon-park/vue-next";
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    People,
  },
};
</script>

<style scoped lang="less">
.wait{
    color: #4987FF;
}
.title{

font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #6C6C6C;
line-height: 19px;

}
.message{

font-size: 20px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 23px;
margin-top: 5px;
}
.item {
  background: pink;
  height: 120px;
  background: #ffffff;
  box-shadow: 0px 2px 6px 1px rgba(0, 0, 0, 0.25);
  border-radius: 10px 10px 10px 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .img{
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #4987FF;
      border-radius: 10px;
  }
}
.main {

  margin-top: 0;
  background: #fff;
  .box-card {
    width: 100%;
    .clearfix {
      display: block;
      > span {
        line-height: 40px;
      }
    }
  }
}
.el-button--primary {
  width: 50px;
}
.el-button {
  padding: 10px 10px;
  border-radius: 0;
  float: right;
}
:deep(.el-timeline-item__tail) {
  border-left: none;
}
.el-timeline {
  padding: 0;
}
:deep(.el-card__body ){
  height: 300px;
  overflow: scroll;
  // background: pink;
}
</style>
