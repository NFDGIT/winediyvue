<template>
<div class="meFuncItem" @click="selectCell">

    <div style="display:flex;flex-direction:column; align-items: center;" >
            <PHImg class="itemImg" :src="item.img"/>
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
    border: 0.1px solid rgba(245,245,245,0.8);

    display: flex;
    justify-content: center;
    align-items: center;
} 
.itemImg{
    height:40px;width:40px;
    background-color: @color-bg;
}   
.itemText{
    font-size: @size-middle;
    color: @color-black;
   
}

</style>
