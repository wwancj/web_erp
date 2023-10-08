<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
  >
  
      <el-sub-menu v-for="(item,index) in list" :key="list.title"  :index="index+'i'" >
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{item.title}}</span>
        </template>

        <el-menu-item index="1-1" v-for="(it,ind) in item.child">
          {{it}}
        </el-menu-item>

      </el-sub-menu>
 
  </el-menu>
</template>
<script setup>
import { markRaw, reactive, ref, toRefs } from "vue";
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from "@element-plus/icons-vue";
const i1=markRaw(IconMenu)
const i2=markRaw(Location)
const i3=markRaw(Setting)



const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const meunlist = reactive({
  list: [
    {
      icon: i1,
      title: "Navigator",
      child: ['人员管理',"资金管理","业务管理"],
    },
    {
      icon: i2,
      title: "设置",
      child: ["系统设置","页面设置"],
    },
    {
        icon:i3,
        title:"菜单",
        child:["消息","通知","公告"]
    },
  ],
});

let {list}=toRefs(meunlist)
</script>
<style lang="less" scoped>
:deep(.el-menu-vertical-demo) {
  border-right-width: 0px solid #fff;
}
.el-menu {
  border-right: 0;
}
:deep(.el-sub-menu__title) {
  padding-left: 0px !important;
}
</style>
