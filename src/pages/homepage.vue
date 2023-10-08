<template>
  <div class="main1">
    <div class="top">
   
      <matter> </matter>
      <sheet></sheet>
    </div>

    <div class="footer">
       <announcement></announcement>
       <examine></examine>
    </div>
  </div>
</template>

<script setup>
import matter from "../components/home/matter.vue";
import sheet from "../components/home/sheet.vue";
import announcement from "../components/home/announcement.vue";
import examine from "../components/home/examine.vue";

</script>

<style scoped lang="less">
.el-row{
    height: 100%;
    >div{
        box-sizing: border-box;
        
    }
}

.footer{
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
     >div:nth-child(1){
       flex-grow: 2;
       width: 0;
     }
     >div:nth-child(2){
       flex-grow: 1;
       width: 0;
     }
}



.top{
    height: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
     >div:nth-child(1){
       flex-grow: 2;
       width: 0;
     }
     >div:nth-child(2){
       flex-grow: 1;
       width: 0;
     }
}

.main1{
    background: #F1F3F8;
}
</style>
