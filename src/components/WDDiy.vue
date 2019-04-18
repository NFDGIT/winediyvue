 <template>
  <div ref="backView" class="diyView">
  <p>{{ title }}</p>
  <WDDiyBack ref="wddiyback" type="0"  title="d" style="position:absolute;"></WDDiyBack>
  <PHTouchPad ref="touchpad"  @touchMoveCallBack="touchMoveCallBack" style="position:absolute;background-color:rgba(0,0,0,0);"></PHTouchPad>
  <PHLayerManager ref="layermanager" @layerChangeCallBack="layerChangeCallBack" style="position:absolute;right:10px;width:100px;"></PHLayerManager>


  
  <button style="position:absolute;left:0px;bottom:0px;" @click="addTextLayer">添加文字</button>  <button style="position:absolute;right:0px;bottom:0px;" @click="addImgLayer">选择照片</button>

  </div>

</template>


<script>



import WDDiyBack from './WDDiyBack.vue'
import PHTouchPad from './PHTouchPad.vue'
import PHLayerManager from './PHLayerManager.vue'


export default {
   components:{
     WDDiyBack,
     PHTouchPad,
     PHLayerManager,
   },

   data(){
     return{
        title:'白酒定制',
        height:'400'
     }

   },
   methods: {
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

       alert();
         let textLayerParameter = {
            type:0,
            title:'请输入文字',
            color:'red',
            angle:0,// 角度
            scale:1,// 缩放
            translateX:0,
            translateY:0,
         };

        this.$refs.wddiyback.layerParameters.push(textLayerParameter);
        this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;
     },
     addImgLayer(){
         let imgLayerParameter = {
            type:1,
            title:'北京烤鸭',
            color:'red',
            img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg',
            angle:0,// 角度
            scale:1,// 缩放
            translateX:0,
            translateY:0,
         };

        this.$refs.wddiyback.layerParameters.push(imgLayerParameter);
        this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;

     }



  },
  mounted(){
      this.$refs.wddiyback.selectedIndex = this.$refs.wddiyback.layerParameters.length-1;
      this.$refs.layermanager.parameters =  this.$refs.wddiyback.layerParameters;

      this.$refs.backView.style.height = window.innerHeight + 'px';
      this.$refs.backView.style.width = window.innerWidth + 'px';
  }
   

}
</script>

<style scoped>
.diyView{
  background-color: aliceblue;
}
</style>


