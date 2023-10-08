<template>
  <div id="myapp">

    <router-view />
  </div>
</template>

<style lang="less">
::-webkit-scrollbar  
{  
    width: 4px;  
    height: 80%;
    background: #fff;
}  

html,body{
  height: 100vh;
  font-family: youyuan;
  font-weight: 600;
}
#app {
  // min-height: 800px;
  
  flex-grow: 1;
}
body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #bfa;
  margin: 0;
  padding: 0;
}

</style>