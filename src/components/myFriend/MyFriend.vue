<template>
<div class="content" ref='content' >

<AppNavi title="我的好友"></AppNavi>


<div class="wrapper" ref="wrapper">
    <div style="width:100%;">
        <div class="itemStyle" v-for="(item,index) of datas" :key="index" >{{ item.title }}</div>
    </div>
</div>


</div>    
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'

export default {


   components:{AppNavi},
   data(){
       return {
           datas:[{title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'},
                  {title:'hello'}]
       }
   },
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
.itemStyle{
    background-color: white;
    width: calc(100% - 40px);
    height: 40px;
    margin: 10px;
    padding: 10px;
}
</style>

