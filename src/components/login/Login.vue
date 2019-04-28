<template>
<div style="height:100%;width:100%;background-color:white;text-align: center;">
   <br>
   <div class="inputBack">
       <input class="loginInput" type="text" placeholder="请输入用户名">
       <input class="loginInput" type="text" placeholder="请输入密码">
   </div>

   <div class="loginBtn" @click="login">
        登录
   </div>
</div>    
</template>
<script>
export default {
    methods:{
        login(){
            this.$router.go(-1)
        }
    },
    mounted(){

    }
}
</script>
<style scoped lang='less'>
.inputBack{
    margin-top: calc(50% - 40px);


    margin-left: 10px;

    width: calc(100% - 20px);
    height: 100px;
    background-color:white;

    text-align: center;

}
.loginInput{
  
   margin-top: 10px;
   width: calc(100% - 40px);
   height: 40px;
   line-height: 40px;
   background-color: @color-bg;

   border: none;
   border-radius: 20px;
   text-align: center;
   
}
.loginBtn{
    height: 40px;
    line-height: 40px;

    color: white;
    background-color: red;
    border-radius: 10px;
    margin-top: 50px;
    margin-left: 30px;
    width: calc(100% - 60px);
}
</style>
