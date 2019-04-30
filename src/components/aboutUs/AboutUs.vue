<template>
<div class="content" ref='content' >

<AppNavi title="关于我们"></AppNavi>

<div class="wrapper" ref="wrapper">


    <div style="width:100%;">
        <br>
        <div style="text-align:center;"> 酒制 app</div>
   
    </div>
</div>


</div>    
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'
export default {


   components:{AppNavi},

   mounted(){
    //   this.$refs.content.style.height = window.innerHeight + 'px';
      this.scroll = new BScroll(this.$refs.wrapper,{
      })
   }
}
</script>
<style scoped>
.content{

   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
}
.wrapper{
    overflow: hidden;
    flex: 1;
}
</style>
