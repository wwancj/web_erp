<template>
    <div class="main">


        <div class="apply">
            <div class="img1">
                <people theme="filled" size="50" fill="#fff"/>
            </div>
            <div class="item">
               <div class="title">申请单</div> 
               <div class="message">调休、事假、病假的申请</div>
            </div>
        </div>


        <div class="apply">
            <div class="img1">
                <people theme="filled" size="50" fill="#fff"/>
            </div>
            <div class="item">
               <div class="title">申请单</div> 
               <div class="message">调休、事假、病假的申请</div>
            </div>
        </div> 
        
        <div class="apply">
            <div class="img1">
                <people theme="filled" size="50" fill="#fff"/>
            </div>
            <div class="item">
               <div class="title">申请单</div> 
               <div class="message">调休、事假、病假的申请</div>
            </div>
        </div> 
        
        <div class="apply">
            <div class="img1">
                <people theme="filled" size="50" fill="#fff"/>
            </div>
            <div class="item">
               <div class="title">申请单</div> 
               <div class="message">调休、事假、病假的申请</div>
            </div>
        </div>


    </div>
</template>

<script>
import { Sleep,People } from "@icon-park/vue-next";
export default {
    name:"",
    data(){
        return{

        }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    },
    components:{
        Sleep,
        People
    }
}
</script>

<style scoped lang="less">
.item{
    width: 100px;
    box-sizing: border-box;
    // padding: 0 20px;
}
.title{
    font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 19px;
-webkit-background-clip: text;
text-align: center;
}
.message{
    margin-top: 10px;
    text-align: center;
    font-size: 12px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #6C6C6C;
line-height: 14px;
-webkit-background-clip: text;
}
:deep(.i-icon-people){
    width: 80px;
    height: 80px;
    background: #FFB72C;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
:deep(.i-icon){
    color: #fff !important;
}

.main{
    background: #fff;
    display: flex;
    height: 286px;
    border-radius: 10px;
    flex-wrap: wrap;
    // flex-direction: column;
    justify-content: space-around;
    background: #f1f3f8;
    
    >div{
        width: 40%;
        height: 140px;
        background: #fff;
        margin-bottom: 10px;
        border-radius: 10px;
        box-sizing: border-box;
    }
    .reissue{
        margin-bottom: 0;
    }
    .out{
        margin-bottom: 0;
    }
    .apply{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        >div{
            width: 90px;
        }
        .img1{
        display: flex;
        // align-items: center;
        }
        
    }
}
</style>
