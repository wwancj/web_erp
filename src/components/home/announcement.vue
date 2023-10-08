<template>
  <div class="main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>公告</span>
        <el-button type="primary">更多</el-button>
      </div>



      <div class="text item">
        <div class="block"></div>
        <el-timeline :reverse="reverse">
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </el-timeline>
      </div>



    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref,toRef} from 'vue';

   

   let reverse=ref(true)
   
   const ac=reactive({
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        }, {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        }, {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        }, {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        }, {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        }, {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
      ]
   })
     

   const activities=toRef(ac,"activities")

</script>

<style scoped lang="less">
.main {
  margin-top: 0;
  background: #fff;
  position: relative;
  flex-direction: column;
  .box-card {
    width: 100%;
  display: flex;
  flex-direction: column;
    .clearfix {
      display: block;
 
      > span {
        line-height: 40px;
      }
    }
  }
}
.el-card{
  flex-grow: 1 ;
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
:deep(.el-card__body){
        height: 300px;overflow: scroll;
        flex-grow: 1;
}
</style>
