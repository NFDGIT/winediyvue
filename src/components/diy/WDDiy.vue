 <template>
  <div ref="content" class="content">
    <div style="position:absolute;left:10px;top:20px;width:30px;height:30px;" @click="back">
        <PHImg style="width:100%;height:100%;" :src="backImg"></PHImg>
    </div>

    <WDDiySwitch @selectCell="changeSwitch"></WDDiySwitch>


    <div  style="position:absolute;right:10px;top:20px;width:30px;height:30px;line-height:30px;text-align:center;background-color:white;border:none;font-size:14px;" @click="preview">预览</div>    
    <div  style="position:absolute;right:50px;top:20px;width:30px;height:30px;line-height:30px;text-align:center;background-color:white;border:none;font-size:14px;" @click="showLayerManager">图层</div>
    

  

   <div :style="drawBackViewStyle" >
      <!-- :layerParameters='parameter1'  -->
      <WDDiyBack :style="wddiybackStyle" ref="wddiyback"  type="0" title="d" ></WDDiyBack>
      <PHTouchPad :style="touchPadStyle" ref="touchpad"  @touchMoveCallBack="touchMoveCallBack" ></PHTouchPad>
   </div>




    <button style="width:70px;height:30px;left:40px;bottom:20px;position:absolute;background-color:#fa7b21;border:none;border-radius:15px;color:white;" @click="addTextLayer">添加文字</button> 

    <button style="width:70px;height:30px;position:absolute;bottom:20px;right:40px;background-color:#fa7b21;border:none;border-radius:15px;color:white;">
         选择图片
        <PHSelectFile  @selectFileCallBack="addImgLayer">hello</PHSelectFile>
    </button>


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
        parameter0:        
         [ 
            {type:0,
            textPara:{
                title:'0',
                color:'red',
            },
            angle:0,// 角度
            scale:0.5,// 缩放
            translateX:0,// x坐标
            translateY:0,// y坐标
            }
        ],
        parameter1:        
         [   {type:0,
            textPara:{
                title:'0',
                color:'red',
            },
            angle:0,// 角度
            scale:0.5,// 缩放
            translateX:0,// x坐标
            translateY:0,// y坐标
            },
            {type:0,
            textPara:{
                title:'1',
                color:'red',
            },
            angle:20,// 角度
            scale:0.5,// 缩放
            translateX:0,// x坐标
            translateY:0,// y坐标
            },
            {type:0,
            textPara:{
                title:'2',
                color:'red',
            },
            angle:40,// 角度
            scale:0.5,// 缩放
            translateX:0,// x坐标
            translateY:0// y坐标
            },
            {type:1,
            imgPara:{
                name:'petter.png',
                img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg',
            },
            
            angle:60,// 角度
            scale:0.5,// 缩放
            translateX:0,
            translateY:0,
            }
        ],
        parameter2:        
         [ 
            {type:1,
            imgPara:{
                name:'petter.png',
                img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg',
            },
            
            angle:60,// 角度
            scale:0.5,// 缩放
            translateX:0,
            translateY:0,
            }
        ],


        drawBackViewStyle:{
           position:'relative',
   
           overflow:'hidden',
           left:'40px',
           top:'100px',
           height:'calc(100% - 200px)',
           width: 'calc(100% - 80px)',
           backgroundColor: 'yellow',
        },

        wddiybackStyle:{
           position:'absolute',
           left:0 + 'px',
        },
        touchPadStyle:{
           left:0 + 'px',
           backgroundColor:'rgba(0,0,0,0.0)',
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
     changeSwitch(index){

        if (index == 0 ){
            this.$refs.wddiyback.layerParameters = this.parameter0;
        }else if (index == 1 ){
            this.$refs.wddiyback.layerParameters = this.parameter1;
        }else if (index == 2 ){
            this.$refs.wddiyback.layerParameters = this.parameter2;           
        }


        this.refreshDrawLayer();

     },
     refreshDrawLayer(){
      this.wddiybackStyle.left = this.touchPadStyle.left = '25%'
      this.wddiybackStyle.top = this.touchPadStyle.top = '20% '
      this.wddiybackStyle.width = this.touchPadStyle.width = '50%'
      this.wddiybackStyle.height = this.touchPadStyle.height = '50%'

      this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;
      this.$refs.layermanager.parameters =  this.$refs.wddiyback.layerParameters;
     },
//    预览
     preview(){
          this.$router.push({name:'preView',
                             params:{
                                layerParameters:[this.parameter0,this.parameter1,this.parameter2]
                             }
          });
     },

   //   图层
     showLayerManager(){
          // alert(this.layerManagerMaskStyle.visibility);
          if  (this.layerManagerMaskStyle.visibility == 'hidden')
          {
              this.layerManagerMaskStyle.visibility = 'visible';
          }else{
              this.layerManagerMaskStyle.visibility = 'hidden';
          }
 
     },
     layerChangeCallBack(parameters) {


        this.$refs.wddiyback.layerParameters = parameters; 
        this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;  
     },


// 修改 参数
     touchMoveCallBack() {
          let selectedIndex = this.$refs.wddiyback.layerParameters.length - 1;
  
          this.$refs.wddiyback.layerParameters[selectedIndex].translateX += this.$refs.touchpad.parameter.deltaX;
          this.$refs.wddiyback.layerParameters[selectedIndex].translateY += this.$refs.touchpad.parameter.deltaY;
          this.$refs.wddiyback.layerParameters[selectedIndex].scale =  this.$refs.touchpad.parameter.scale;
          this.$refs.wddiyback.layerParameters[selectedIndex].angle += this.$refs.touchpad.parameter.angle;
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
      this.changeSwitch(0);     





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