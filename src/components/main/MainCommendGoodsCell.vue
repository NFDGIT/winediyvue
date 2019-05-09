<template>
    <div class="mainCommendGoodsItem" @click="selectCell">
        <PHImg  class="goodsImg" :src="item.goodsImg" />
        <div style="margin-left:10px;margin-top:5px;margin-bottom:10px;display:flex;flex-direction:row;align-items:center;width:clac(100% - 20px);">
            <PHImg class='headImg' :src="item.headImg"/>
            <div style="flex:1;text-align:left;margin-left:10px;">
                <div class="userName">{{ item.name }}</div>
                <div class="userDesc">{{ item.desc }}</div>
            </div>
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

    data(){
        return{
            defaultImg: 'this.src="' + require('@/assets/imgs/default.png') + '"'
        }
    },
    methods:{
        selectCell(){
            this.$emit('jumpToGoodsDetail','');
        }
    }
}
</script>
<style scoped lang='less'>
.mainCommendGoodsItem{

    float: left;
    width: 50%;
    background-color: white;
    text-align: center;
}
.bottomLine{
    width: 100%;
    height: 1px;
    background-color: rgb(240, 248, 255);
}

.goodsImg{
    margin-top: 10px;
    margin-left: 10px;
    background-color:@color-bg;
    width: calc(100% - 20px);
    height: 200px;
    border-radius: 10px;
}
.headImg{
    height:40px;width:40px;float:left;border-radius: 50%;background-color: @color-bg;
}
.userName{
    margin-left:10px;
    width:calc(100% - 20px);
    color: @color-black;
    font-size: @size-middle;
}
.userDesc{
    margin-left:10px;
    width:calc(100% - 20px);
    color: @color-lightgray;
    font-size: @size-small;
}
</style>
