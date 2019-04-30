<template>
<div class="content" ref='content' >

<AppNavi title="预览"></AppNavi>

<div class="wrapper" ref="wrapper" >


    
   <!-- <div style="width:100%;background-color:yellow;overflow: hidden;">
     <div style="width:80%;height:500px;background:red;" v-for="(item,index) of datas" :key="index" >
           <WDDiyBack   style="width:80%;height:80%;" :params='item'></WDDiyBack>
     </div>

   </div> -->

</div>


</div>    
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'


import WDDiyBack from '@/components/diy/WDDiyBack.vue'
export default {

   components:{
    AppNavi,
    WDDiyBack
   },
   data(){
       return {
            wddiybackStyle:{
                position:'absolute',
                left:0 + 'px',
            },
            datas:[]
       }
   },
   mounted(){

    //   this.wddiybackStyle.left  = '25%'
    //   this.wddiybackStyle.top = '20% '
    //   this.wddiybackStyle.width =  '50%'
    //   this.wddiybackStyle.height =  '50%'

      this.scroll = new BScroll(this.$refs.wrapper,{
      });
      this.datas = this.$route.params.layerParameters;
    //   let params = this.datas[0];


    //   this.$refs.wddiyback1.layerParameters = params;
    //   alert(this.$refs.wddiyback1);      
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
    position: relative;
}
</style>
