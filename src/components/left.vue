<template>
   <div class="left">
     <img src="../assets/img/logo.png" alt="" />
     </div>
</template>

<script>
export default {
    name:"left",
    data(){
        return{

        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
}
</script>

<style scoped lang="less">
 .left {
    width: 50%;
    height: 100%;
    background-image: url("../assets/img/机器.jpg");
    position: relative;
    opacity: 1;
    flex-grow: 1;
  }   
   img {
    width: 190px;
    height: 55px;
    position: absolute;
    left: 50px;
    top: 5%;
    z-index: 99;
  }
</style>
