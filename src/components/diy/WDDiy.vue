 <template>
  <div ref="content" class="content">
    <div style="position:absolute;left:10px;top:10px;width:30px;height:30px;" @click="back">
        <PHImg style="width:100%;height:100%;" :src="backImg"></PHImg>
    </div>

    <WDDiySwitch @selectCell="changeSwitch"></WDDiySwitch>


    <div  style="position:absolute;right:10px;top:10px;width:30px;height:30px;line-height:30px;text-align:center;background-color:white;border:none;font-size:14px;" @click="preview">预览</div>    
    <div  style="position:absolute;right:50px;top:10px;width:30px;height:30px;line-height:30px;text-align:center;background-color:white;border:none;font-size:14px;" @click="showLayerManager">图层</div>
    

  
   <!-- 外层div -->
   <div :style="drawBackViewStyle" >
 
      <!--  填充整个 外层div  -->
      <div ref="targetView" :style="targetViewStyle" >
          <!-- background-color:red; -->
        <PHImg style="width:100%;height:100%;" :src="bgImg"></PHImg>
        <!-- :layerParameters='parameter1'  -->
        <WDDiyBack :style="wddiybackStyle" ref="wddiyback"  type="0" title="d" ></WDDiyBack>
        <PHTouchPad :style="touchPadStyle" ref="touchpad"  @touchMoveCallBack="touchMoveCallBack" ></PHTouchPad>

      </div>
   </div>


    <button style="width:70px;height:30px;position:absolute;bottom:80px;right:40px;background-color:#fa7b21;border:none;border-radius:15px;color:white;" @click="addTextLayer">添加文字</button> 

    <button style="width:70px;height:30px;position:absolute;bottom:20px;right:40px;background-color:#fa7b21;border:none;border-radius:15px;color:white;">
         选择图片
        <PHSelectFile  @selectFileCallBack="addImgLayer">hello</PHSelectFile>
    </button>


    <div :style="layerManagerMaskStyle" @click="showLayerManager">
         <PHLayerManager  ref="layermanager" @layerChangeCallBack="layerChangeCallBack" :style="layerManagerStyle"></PHLayerManager>
    </div>

    <WDDiyItemEditView :style="wdDiyItemEditViewStyle"  @editText="editText"></WDDiyItemEditView>

    <WDDiyTextEditView ref="wdDiyTextEditView" ></WDDiyTextEditView>

    <PHLoading ref="phLoading"></PHLoading>


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

import PHLoading from '@/components/common/PHLoading.vue'


import WDDiyItemEditView from '@/components/diy/WDDiyItemEditView.vue'
import WDDiyTextEditView from '@/components/diy/WDDiyTextEditView.vue'

// 引入html2canvas
import html2canvas from 'html2canvas'
import domtoimage from 'dom-to-image';


export default {
   components:{
     PHImg,
     WDDiySwitch,
     WDDiyBack,
     PHTouchPad,
     PHLayerManager,
     PHSelectFile,
     PHLoading,
     WDDiyItemEditView,
     WDDiyTextEditView,
    //  Html2canvas,
     
   },

   data(){
     return{
        backImg:require('@/assets/imgs/quit.png'),

        drawBackColor:'red',
        bgImg:require('@/assets/imgs/redBottle.png'),
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

        wdDiyItemEditViewStyle:{
            position:'absolute',
            bottom:'20px',
            left:'20px',
            visibility:'hidden'
        },

        drawBackViewStyle:{
           position:'relative',
           overflow:'hidden',
       



        },
        targetViewStyle:{
            position:'absolute',
            width:'100%',
            height:'100%',
            backgroundColor:this.drawBackColor,
        },
        wddiybackStyle:{
           position:'absolute',
           left:0 + 'px',
        },
        touchPadStyle:{
           left:0 + 'px',
           backgroundColor:'rgba(0,0,0,0.0)',
           position:'absolute',
           left:'0px',
           top:'0px',
           width:'100%',
           height:'100%',
        //    backgroundColor:'rgba(0,0,0,0.2)',
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
     changeSwitch(index,isScreenshot){

        if (index == 0 ){
            this.$refs.wddiyback.layerParameters = this.parameter0;
        }else if (index == 1 ){
            this.$refs.wddiyback.layerParameters = this.parameter1;
        }else if (index == 2 ){
            this.$refs.wddiyback.layerParameters = this.parameter2;           
        }


        this.refreshDrawLayer(index,isScreenshot);

     },
     refreshDrawLayer(index,isScreenshot){
        //  alert(this.$refs.wdDiyItemEditView)
        if (this.$refs.wddiyback.layerParameters[this.$refs.wddiyback.layerParameters.length - 1].type == '0'){
            this.wdDiyItemEditViewStyle.visibility = 'visible';
        }else{
            this.wdDiyItemEditViewStyle.visibility = 'hidden';
        }

        this.drawBackViewStyle.marginLeft = this.drawBackViewStyle.marginRight  =  'auto';
        this.drawBackViewStyle.marginTop = '20%';
        this.drawBackViewStyle.width = '100%';
        this.drawBackViewStyle.height = '0px';
        this.drawBackViewStyle.paddingBottom = '100%';
        this.drawBackViewStyle.paddingRight = '0';
      
        if (index == 0 ) {
            this.targetViewStyle.backgroundColor = 'red',
            this.bgImg = "require('@/assets/imgs/redBoåttle.png')",
        
            this.targetViewStyle.left = "10%";
            this.targetViewStyle.width = '80%';
            this.targetViewStyle.height = '80%';
  
            // this.drawBackViewStyle.left = '10%';



            this.wddiybackStyle.top =  '10%'
            this.wddiybackStyle.height = '80%'

            this.wddiybackStyle.left =  '10%'
            this.wddiybackStyle.width =  '80%'
        }else if(index == 1){
            this.targetViewStyle.backgroundColor  = 'red',
            this.bgImg = "require('@/assets/imgs/redBottle.png')",

            this.targetViewStyle.left = '30%';
            this.targetViewStyle.width = '40%';
            this.targetViewStyle.height = '100%';
 
            this.wddiybackStyle.top =  '50%'
            this.wddiybackStyle.height =  '40%'

            this.wddiybackStyle.left =  '10%'
            this.wddiybackStyle.width = '80%'
        }else if(index == 2){
            this.targetViewStyle.backgroundColor  = 'white',
            this.bgImg = require('@/assets/imgs/redBottle.png'),

            this.targetViewStyle.left = '36%';
            this.targetViewStyle.width = '28%';
            this.targetViewStyle.height = '100%';



            this.wddiybackStyle.top =  '60%'
            this.wddiybackStyle.height =  '20%'

            this.wddiybackStyle.left = '20%'
            this.wddiybackStyle.width = '60%'   
        }

        this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;
        if (isScreenshot){
            this.$refs.wddiyback.selectedIndex = 10000;
        }
        this.$refs.layermanager.parameters =  this.$refs.wddiyback.layerParameters;



     },

     editText(){
        // alert();

        // this.$refs.wdDiyTextEditView.textParam = this.parameter0[0];

        
        this.$refs.wdDiyTextEditView.show(this.$refs.wddiyback.layerParameters[this.$refs.wddiyback.layerParameters.length - 1]);
        

     },

     //    预览
     preview(){

   


        this.$refs.phLoading.show('生成预览中');

        let _this = this;
        let targetView =  this.$refs.targetView;
        // let wddiyback =   this.$refs.wddiyback;
        // alert(wddiyback);
        var params = [];
        var count = 0;
        var totalCount = 3;
        for (let index = count; index < totalCount; index++) {


            setTimeout(() => {
            //    alert(element);
                _this.changeSwitch(index,true);

          
                html2canvas(targetView,{
                    backgroundColor:null,
                    scale:2,
                    logging:false,
                    useCORS:true
                }).then(function (canvas) {
                    

                    let url = canvas.toDataURL('image/png') 
                    alert(url);
                    params.push(url);

                    count += 1;
                    if (count == totalCount){
        
                        _this.$refs.phLoading.hidden();
                        _this.$router.push({name:'preView',
                                           params:{
                                                   layerParameters:params
                                           }
                        });
                    }

                }).catch(function(error){
                    alert(error);
                });



            }, (index + 1) * 500);


        }


 
              

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
    //  图层改变后的回调
     layerChangeCallBack(parameters) {
        this.$refs.wddiyback.layerParameters = parameters; 
        this.refreshDrawLayer(this.selectedIndex);
     },


     // 修改 参数
     touchMoveCallBack() {
          let selectedIndex = this.$refs.wddiyback.layerParameters.length - 1;
  
          this.$refs.wddiyback.layerParameters[selectedIndex].translateX += this.$refs.touchpad.parameter.deltaX;
          this.$refs.wddiyback.layerParameters[selectedIndex].translateY += this.$refs.touchpad.parameter.deltaY;
          this.$refs.wddiyback.layerParameters[selectedIndex].scale =  this.$refs.touchpad.parameter.scale;
          this.$refs.wddiyback.layerParameters[selectedIndex].angle += this.$refs.touchpad.parameter.angle;
     },
     // 添加文字
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
    //  添加图片
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
      this.changeSwitch(0,false);     

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