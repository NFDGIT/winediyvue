<template>
<div v-bind:class="[DiyItem,index == selectedIndex  ? top : '']"  @click="switchLayer" :style="{transform:'rotateZ('+layerParameter.angle+'deg)' + 'scale('+layerParameter.scale+')',transformOrigin:'centerX centerY',left:layerParameter.translateX+'px',top:layerParameter.translateY+'px'}" >
    <PHImg v-if="layerParameter.type == 1"  :src="layerParameter.imgPara.img" style="width:100%;height:100%;"/>
    <p v-if="layerParameter.type == 0" :style="{fontSize:layerParameter.textPara.fontSize,color:layerParameter.textPara.color,fontFamily:layerParameter.textPara.fontFamily}">{{ layerParameter.textPara.title }}</p>

</div>
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"
export default {
    props:[
        'index',
        'selectedIndex',
        'layerParameter'
    ],
    components:{
        PHImg
    },
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
    border-color: yellow;
}
.canvas-item{
    width: 100%;
    height: 100%;
}
</style>
