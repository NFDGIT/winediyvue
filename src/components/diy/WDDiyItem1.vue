<template>
<div v-bind:class="[DiyItem,index == selectedIndex  ? top : '']"  @click="switchLayer"  :style="{left:layerParameter.translateX+'px',top:layerParameter.translateY+'px'}">
    <canvas ref="canvas" id="cancas"  class="canvas-item">
    </canvas>
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
        // alert('');
        let _this = this;
        var canvas = this.$refs.canvas;
        var ctx = canvas.getContext('2d');
        // alert(ctx);



// "{transform:'rotateZ('+layerParameter.angle+'deg)' + 'scale('+layerParameter.scale+')',transformOrigin:'centerX centerY',left:layerParameter.translateX+'px',top:layerParameter.translateY+'px'}"
        if ( this.layerParameter.type == 1){
            let imgUrl = this.layerParameter.imgPara.img;
            var img = new Image();
            img.onload = function () {

                ctx.drawImage(img,0,0,100*_this.layerParameter.scale,100*_this.layerParameter.scale);

                // alert(dd);
            }
            img.src = imgUrl;

        }else{
            
            let text = this.layerParameter.textPara.title;
            // alert(text);
            ctx.fillStyle = '#000000';
            ctx.fillText(text,0,0,100);
        }


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
    border-color: yellow;
}
.canvas-item{
    width: 100%;
    height: 100%;
}
</style>
