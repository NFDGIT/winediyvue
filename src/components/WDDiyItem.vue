<template>
<div v-bind:class="[DiyItem,index == selectedIndex  ? top : '']"  @click="switchLayer" :style="{transform:'rotateZ('+layerParameter.angle+'deg)' + 'scale('+layerParameter.scale+')',transformOrigin:'centerX centerY',left:layerParameter.translateX+'px',top:layerParameter.translateY+'px'}" >
    <img v-if="layerParameter.type == 1"  :src="layerParameter.img"/>
    <p v-if="layerParameter.type == 0">{{ layerParameter.title }}</p>
    <!-- <canvas ref="canvas" id="cancas"  class="canvas-item">
    </canvas> -->
</div>
</template>
<script>

export default {
    props:[
        'index',
        'selectedIndex',
        'layerParameter'
    ],
    data(){
        return {
           DiyItem:'DiyItem',
           top:'top'
        }
    },
    methods:{
       switchLayer(){
        //    alert('item');
       }
    },
    mounted(){
        // let _this = this
        // let canvas = document.getElementById('canvas');

        // if (canvas.getContext){

  
        //     var context = canvas.getContext('2d');
        //     context.clearRect(0,0,canvas.width,canvas.height);  

        //     if (_this.layerParameter.type == 0) {
        //         context.fillStyle = 'red';
        //         context.font = '40px Georgia';
        //         context.fillText(_this.layerParameter.title,40,40,200);

        //     }else if (_this.layerParameter.type == 1){
        //         var img = new Image();
        //         img.src = _this.layerParameter.img;
        //         img.onload = function () {
        //             context.drawImage(img,0,0,canvas.width,canvas.height);
        //         }


        //     }

        // }


    }
    
}
</script>
<style scoped>
.DiyItem{
    width: 80%;
    height: 80%;
    background-color:rgba(0, 0, 0, 0);
    position:absolute;
}
.top{ 
    border-style: solid;
    border-width: 1px;
    border-color: red;
}
.canvas-item{
    width: 100%;
    height: 100%;
}
</style>
