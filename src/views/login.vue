<template>
  <div class="content">
    <div class="main">
       <left></left>
       <transition name="fade1">
         <right v-if="d.islogin" ></right>
       </transition>

      <transition name="fade" >
         <register v-if="!d.islogin"></register>
      </transition>
    </div>
  </div>
</template>

<script setup>
import right from "../components/right.vue"
import left from "../components/left.vue"
import register from "../components/regiest.vue"
import { loginStore } from "@/mypinia/store";

let d=loginStore()

</script>

<style scoped lang="less">

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}


.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}


.fade1-enter-active, .fade1-leave-active {
  transition: width .5s;
}
.fade1-enter-from, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
 width: 0%;
}
.fade1-enter-to{
  width: 50%;
}




//隐藏注册页
.right2 {
  display: none;
  
}

//显示注册页

.register_left {
  height: 100%;
  width: 100%;
  background-image: url("../assets/img/机器.jpg");
  //   background-size: 100%;
  //   transition: all 0.3s;
  transition: all 0.5s;
  // filter: grayscale(75%);
}


.register_right {
  position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translateX(-50%) translateY(-50%);
//   display: none;
//   transition: all 0.3s;
}


.content {
  height: 100vh;
  background-color: #e0e0e0;
  padding: 0;
  margin: 0;
}
.main {
  width: 1279px;
  height: 600px;
  overflow: hidden;
  display: flex;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  left: 50%;
  box-shadow: 23px 23px 61px #8d8d8d, -23px -23px 61px #ffffff;

 
  
}
.signUp {
  background: white !important;
  border: 1px solid #8b8b8b !important;
  color: #4987ff !important;
}
</style>
