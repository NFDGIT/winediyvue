<template>
    <div class="meWorksItem" @click="selectCell">
        <div>
            <PHImg class="itemImg" :src="item"  /> 
            <div class="itemText">{{item.title}}</div>
        </div>

    </div>    
</template>
<script>

import PHImg from "@/components/common/PHImg.vue"
export default {
    props:['item','index'],
    components:{
        PHImg
    },
    methods:{
        selectCell(){
            this.$emit('selectCell',this.index);
        }
    }
}
</script>
<style scoped lang="less">
.meWorksItem{
    background-color:white;
    float: left;
    width: 50%;
    height: 160px;
    text-align: center;

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
