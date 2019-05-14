<template>
    <div style="">
        <button class="mainFuncItem" v-for="(item,index) of [{title:'品类介绍',img:require('@/assets/imgs/main_category.png')},{title:'新手攻略',img:require('@/assets/imgs/main_strategy.png')},{title:'活动中心',img:require('@/assets/imgs/main_center.png')}]" :key="index" @click="selectCell(index)">
 
            <PHImg class="itemImg" :src="item.img"  /> 
            <div class="itemText">{{item.title}}</div>
    
        </button>
    </div>    
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"
export default {
    components:{
        PHImg
    },
    data(){
        return{
            defaultImg: 'this.src="' + require('@/assets/imgs/default.png') + '"'
        }
    },
    methods:{
        selectCell(index){
            this.$emit('selectCell',index);
        }
    }
}
</script>
<style scoped lang='less'>
.mainFuncItem{
    background-color: white;
    width: 33%;
    border-color: rgba(0, 0, 0, 0);
    height: 100px;
    float: left;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
}
.itemImg{
    height:40px;
    width:40px;
    background-color: @color-bg;
}   
.itemText{
    position:relative;
    margin-top:10px;
    margin-bottom:10px;
    font-size: @size-middle;
}

</style>

