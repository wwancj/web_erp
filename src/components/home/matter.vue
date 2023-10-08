<template>
  <div class="main">
    <el-tabs type="border-card">
      <el-tab-pane label="待完成">
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-tab-pane>
      <el-tab-pane label="未完成">
           <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/12 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/3 20:46</p>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h4>更新 Github 模板</h4>
                <p>王小虎 提交于 2018/4/2 20:46</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.el-timeline{
    padding-left: 10px;
    
}
:deep(.el-timeline-item__node){
    background-color: #fff;
    border: 1px solid #4987FF;
}
:deep(.el-timeline-item__tail){
    border-left:2px solid #4987FF;
}
:deep(#pane-0){
  height: 100%;
}
:deep(.block){
height: 100%;
// background-color: #4987FF;
}

:deep(.el-tabs__content){
  flex-grow: 1;
}
#pane-1{
  height: 100%;
}
.main {

  // background: #fff;
  // border-radius: 20px;
  overflow: hidden;
  box-sizing: border-box;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  >div:nth-child(1){
    flex-grow: 1;
      display: flex;
     flex-direction: column;
 
  }
}
.el-tabs--border-card {
  width: 100%;
}
:deep(.el-tabs__nav ){
  float: right;
  // margin: 10px;
  background: #f1f3f8;
  margin-right: 20px;
  margin-top: 10px;
  overflow: hidden;
  padding: 8px;
  border-radius: 8px;
  > div {
    margin: 5px;
    // background: #fff;
  }
}

.el-tabs{
  position: relative;
  height: 100%;
}
.el-tabs::before {
  content: "待办事项";
  position: absolute;
  z-index: 99;
  left: 20px;
  top: 20px;
  font-size: 20px;
  font-family: PingFang SC-Bold, PingFang SC;
  font-weight: bold;
  color: #000000;
  line-height: 28px;
  -webkit-background-clip: text;

}
.el-tabs--border-card {
  border: none;
  box-shadow: none;
}
:deep(.el-tabs__nav-scroll) {
  background-color: #fff;
}
:deep(.el-tabs__content) {
  background: #f1f3f8;
  padding: 0;
  margin: 10px 10px;
}
:deep(.is-active) {
  background: #fff !important;
  border-radius: 8px;
}
:deep(.el-tabs-item) {
  margin-top: 10px !important;
  background: red !important;
}
:deep(.el-tabs__item:first-child) {
  margin-left: 0 !important;
}
:deep(.el-tabs--border-card) > .el-tabs__header .el-tabs__item {
  //  margin: 5px important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
.block{
    // height: 200px;
    overflow: scroll;
}

</style>

