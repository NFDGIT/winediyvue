<template>
<div class="content" ref='content' >

<AppNavi title="预览" :rightTitle="'保存'" @rightClick='rightClick'></AppNavi>

<div class="wrapper" ref="wrapper" >
<div>

     <PHCarouselView :imgs="datas" 
     style="height:300px;width:100%;">
     </PHCarouselView>
</div>    
</div>

</div>    
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'

import PHCarouselView from "@/components/common/PHCarouselView.vue"

// import PHImg from "@/components/common/PHImg.vue"

// import WDDiyBack from '@/components/diy/WDDiyBack.vue'
export default {

   components:{
    AppNavi,
    PHCarouselView,
   },
   data(){
       return {
            wddiybackStyle:{
                position:'absolute',
                left:0 + 'px',
            },
            datas:['','','']
       }
   },
   methods:{
      rightClick(){

       
          let key = "localWorksKey";

          let localWorks = this.getLocalItem(key);
          if (localWorks == null){
            localWorks = []
          }

          let worksData = {'id':'1','name':'彭辉作品','desc':'个人白酒定制','works':this.datas};
          localWorks.push(worksData);
          this.setLocalItem(key,localWorks);

          // alert(this.getLocalItem(key).length);
       
          if (confirm('保存成功，是否去查看')){
              // alert('查看成功');
              this.$router.push({name:'goodsDetail',params:{
                data:worksData
              }})

          }

      },    
   },
   mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{

      });
      
      // this.datas = []
      // alert(this.$route.params.layerParameters[0]);
      this.datas =   this.$route.params.layerParameters;
      // alert(this.datas.length)
     
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
