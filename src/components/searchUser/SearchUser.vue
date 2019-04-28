<template>
<div class="content" ref='content' >
<div class="searchNavi">
  <input class="searchNaviSearch" placeholder="请输入用户名" @click="searchClick" />
  <div class="searchNaviCancel" @click="cancelClick">取消</div>
</div>

<div class="wrapper" ref="wrapper">
    <div style="width:100%;">
  
    </div>
</div>


</div>   
</template>
<script>
import BScroll from 'better-scroll'


export default {
    methods:{
        cancelClick(){
            this.$router.go(-1);
        }
    },
    mounted(){
    //   this.$refs.content.style.height = window.innerHeight + 'px';
      this.scroll = new BScroll(this.$refs.wrapper,{
      })
   }
}
</script>
<style scoped lang="less">
.content{

   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
}
.searchNavi{
   height:44px;line-height:44px;width:100%;background-color:white;display:flex;justify-content:center;
    align-items:Center;flex-direction:row;vertical-align: middle; 
}
.searchNaviSearch{
    flex:1;
    position:relative;
    line-height:30px;
    height:30px;
    text-align:center;

    font-size:@size-middle;
    border-radius:20px;
    background-color: @color-bg;
    border: none;
    outline:medium;
}
.searchNaviCancel{
   width:40px;
   text-align:center;
   height:30px;
   line-height:30px;
   position:relative;
   float:right;
   background-color: white;
   font-size: 14px;
}

.wrapper{
    overflow: hidden;
    flex: 1;
}
</style>
