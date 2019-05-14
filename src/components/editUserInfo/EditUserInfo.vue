<template>
<div style="height:100%;width:100%;background-color:white;text-align: center;display:flexed;">
   <AppNavi :title="'修改用户信息'"></AppNavi>
   <div style="width:100%;flex:1;">

         <br>
         <div class="inputBack">
            <input class="loginInput" type="text" placeholder="用户名">
            <input class="loginInput" type="text" placeholder="签名">
            <input class="loginInput" type="text" placeholder="密码">
        </div>
   
        <div class="loginBtn" @click="login">
            确定修改
        </div>


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

    },
    mounted(){

    }
}
</script>
<style scoped lang='less'>
.inputBack{
    margin-top: 40px;

    margin-left: 10px;

    width: calc(100% - 20px);

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
   text-align: center;
   outline: none;
   
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
