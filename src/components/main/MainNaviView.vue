<template>
<div class="mainNavi">
    
  <div class="mainNaviSearch" @click="searchClick">搜索用户</div>
  <div class="mainNaviMessage" @click="messageClick">消息</div>

</div> 
</template>
<script>
export default {
    methods:{
        messageClick(){
            this.$emit('messageClick','')
        },
        searchClick(){
            this.$emit('searchClick','')
        }

    }
}
</script>
<style scoped lang="less">
.mainNavi{
   height:44px;line-height:44px;width:100%;background-color:white;display:flex;justify-content:center;
    align-items:Center;flex-direction:row;vertical-align: middle; 
}
.mainNaviSearch{
   flex:1;
   position:relative;
   height:30px;
   line-height:30px;
   text-align:center;
   font-size:14px;
   border-radius:15px;
   background-color: @color-bg;

}
.mainNaviMessage{
   line-height: 30px;text-align:center;width:40px;height:30px;position:relative; float:right;background-color: white;border-color: aliceblue;font-size: 14px;
}
</style>
