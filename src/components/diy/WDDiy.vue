 <template>
  <div ref="content" class="content">
    <div style="position:absolute;left:10px;top:20px;width:30px;height:30px;" @click="back">
        <PHImg style="width:100%;height:100%;" :src="backImg"></PHImg>
    </div>

    <WDDiySwitch></WDDiySwitch>

    <button  style="position:absolute;right:10px;top:20px;width:50px;height:30px;background-color:white;border:none;" @click="showLayerManager">图层</button>

    <div :style="drawBackViewStyle" >
      <WDDiyBack :style="wddiybackStyle" ref="wddiyback"  type="0" title="d" ></WDDiyBack>
      <PHTouchPad :style="touchPadStyle" ref="touchpad"  @touchMoveCallBack="touchMoveCallBack" ></PHTouchPad>
    </div>
    


    <button style="left:10px;bottom:20px;height:30px;position:absolute;background-color:white;border:none" @click="addTextLayer">添加文字</button> 
    <PHSelectFile style="position:absolute;bottom:10px;left:100px;" @selectFileCallBack="addImgLayer"></PHSelectFile>



    <div :style="layerManagerMaskStyle" @click="showLayerManager">
    <PHLayerManager  ref="layermanager" @layerChangeCallBack="layerChangeCallBack" :style="layerManagerStyle"></PHLayerManager>
    </div>
  </div>

</template>

<script>

import BScroll from 'better-scroll'

import PHImg from "@/components/common/PHImg.vue"

import WDDiySwitch from './WDDiySwitch.vue'
import WDDiyBack from './WDDiyBack.vue'
import PHTouchPad from './PHTouchPad.vue'
import PHLayerManager from './PHLayerManager.vue'

import PHSelectFile from '@/components/common/PHSelectFile.vue'

export default {
   components:{
     PHImg,
     WDDiySwitch,
     WDDiyBack,
     PHTouchPad,
     PHLayerManager,
     PHSelectFile
     
   },

   data(){
     return{
        backImg:require('@/assets/imgs/quit.png'),
        drawBackViewStyle:{
           position:'relative',
           overflow:'hidden',
           left:'10%',
           top:'10%',
           height:'80%',
           width: '80%',
           backgroundColor: 'white',

        },
        wddiybackStyle:{
           position:'absolute',
           left:0 + 'px',

        },
        touchPadStyle:{
           left:0 + 'px',
           backgroundColor:'rgba(0,0,0,0.2)',
           position:'absolute',
        },
        layerManagerMaskStyle:{
            position:'absolute',
            left:'0px',
            top:'0px',
            width:'100%',
            height:'100%',
            backgroundColor:'rgba(0,0,0,0.4)',
            visibility:'hidden',
        },
        layerManagerStyle:{
            position:'absolute',
            top:'10px',
            right:'10px',
            width:'100px',
        },

        title:'白酒定制',
        height:'400'
     }


   },
   methods: {
     back(){
        this.$router.go(-1);
     },
     showLayerManager(){


          // alert(this.layerManagerMaskStyle.visibility);
          if  (this.layerManagerMaskStyle.visibility == 'hidden')
          {
              this.layerManagerMaskStyle.visibility = 'visible';
          }else{
              this.layerManagerMaskStyle.visibility = 'hidden';
          }
         
     },
     touchMoveCallBack() {
          let selectedIndex = this.$refs.wddiyback.layerParameters.length - 1;
  
          this.$refs.wddiyback.layerParameters[selectedIndex].translateX += this.$refs.touchpad.parameter.deltaX;
          this.$refs.wddiyback.layerParameters[selectedIndex].translateY += this.$refs.touchpad.parameter.deltaY;
          this.$refs.wddiyback.layerParameters[selectedIndex].scale =  this.$refs.touchpad.parameter.scale;
          this.$refs.wddiyback.layerParameters[selectedIndex].angle += this.$refs.touchpad.parameter.angle;
     },
     layerChangeCallBack(parameters) {
        this.$refs.wddiyback.layerParameters = parameters; 
        this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;  
     },
     addTextLayer(){

         let textLayerParameter = {
            type:0,
            textPara:{
              title:'请输入文字',
              color:'red',
            },
            angle:0,// 角度
            scale:1,// 缩放
            translateX:0,
            translateY:0,
         };

        this.$refs.wddiyback.layerParameters.push(textLayerParameter);
        this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;
     },
     addImgLayer(fileUrls){
       let url = fileUrls[0];

       let imgLayerParameter = {
          type:1,
          imgPara:{
              name:name,
              img:url,
          },
          angle:0,// 角度
          scale:1,// 缩放
          translateX:0,
          translateY:0,
         };

        this.$refs.wddiyback.layerParameters.push(imgLayerParameter);
        this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;
     },

  },
  mounted(){
      this.scroll = new BScroll(this.$refs.content,{
        click:true
      });

      this.wddiybackStyle.left = this.touchPadStyle.left = '25%'
      this.wddiybackStyle.top = this.touchPadStyle.top = '20% '
      this.wddiybackStyle.width = this.touchPadStyle.width = '50%'
      this.wddiybackStyle.height = this.touchPadStyle.height = '50%'

      this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;
      this.$refs.layermanager.parameters =  this.$refs.wddiyback.layerParameters;

  }
   
}
</script>

<style scoped>
.content{
  position:relative;
  width: 100%;
  overflow: hidden;


  /* flex: 1; */
   height:100%;
}
</style>