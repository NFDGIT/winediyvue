<template>
    <div style="">
        <button class="mainFuncItem" v-for="(item,index) of ['品类介绍','新手攻略','活动中心']" :key="index" @click="selectCell(index)">
            <div>
                <PHImg class="itemImg" :src="item"  /> 
                <div class="itemText">{{item}}</div>
            </div>
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
    justify-content: center;
    align-items: center;
}
.itemImg{
    height:50px;
    width:50px;
    background-color: @color-bg;
}   
.itemText{
    position:relative;
    margin-top:10px;
    margin-bottom:10px;
    font-size: @size-middle;
}

</style>

