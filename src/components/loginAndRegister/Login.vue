<template>
<div style="height:100%;width:100%;background-color:white;text-align: center;display:flexed;">
   <AppNavi :title="'登录'"></AppNavi>
   <div style="width:100%;flex:1;">

         <br>
         <div class="inputBack">
            <input class="loginInput" type="text" placeholder="请输入用户名">
            <input class="loginInput" type="text" placeholder="请输入密码">
        </div>
   
        <div class="loginBtn" @click="login">
            登录
        </div>
        <div style="margin-top:30px;text-align:center;width:calc(100% - 0px);height:30px;line-height:30px;" @click="regist">注册</div>


   </div>
  

</div>    
</template>
<script>
import AppNavi from '@/components/AppNavi.vue'
export default {
    components:{
        AppNavi
    },
    methods:{
        login(){
            this.$router.go(-1)
        },
        regist(){
            this.$router.push({name:'register'});
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
