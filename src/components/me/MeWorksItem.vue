<template>
    <div class="meWorksItem" @click="selectCell">
        <div>
            <PHImg class="itemImg" :src="item.img"  /> 
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
    width: calc(50% - 1px);
    height: 120px;
    text-align: center;
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
