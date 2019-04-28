<template>
<div v-bind:class="[DiyItem,index == selectedIndex  ? top : '']"  @click="switchLayer" :style="{transform:'rotateZ('+layerParameter.angle+'deg)' + 'scale('+layerParameter.scale+')',transformOrigin:'centerX centerY',left:layerParameter.translateX+'px',top:layerParameter.translateY+'px'}" >
    <img v-if="layerParameter.type == 1"  :src="layerParameter.imgPara.img" style="width:auto;height:auto;max-width:100%;max-height:100%;"/>
    <p v-if="layerParameter.type == 0">{{ layerParameter.textPara.title }}</p>
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
