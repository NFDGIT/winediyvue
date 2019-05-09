<template>
<div class="meFuncItem">

    <div style="display:flex;flex-direction:column; align-items: center;" @click="selectCell">
            <PHImg class="itemImg" :src="item"/>
            <div class="itemText">{{item.title}}</div>
    </div>

</div>
    
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"
export default {
    props:['item'],
    components:{
        PHImg
    },
    methods:{
        selectCell(){
            this.$emit('selectCell','');
        }
    }
}
</script>
<style scoped lang="less">
.meFuncItem{
    background-color:white;
    float: left;
    width: 33%;
    height: 120px;
    border: 0.1px solid aliceblue;

    display: flex;
    justify-content: center;
    align-items: center;
} 
.itemImg{
    height:50px;width:50px;
    background-color: @color-bg;
}   
.itemText{
    font-size: @size-middle;
    color: @color-black;
   
}

</style>
