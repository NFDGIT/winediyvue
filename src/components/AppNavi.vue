<template>
    
   
    <div class="app-navi">

        <div class="app-navi-back" @click="goBack" >
            <PHImg  :src="backImg"  style="width:100%;height:100%;"/>
        </div>

        <div class="app-navi-title"> {{ title }}</div>
    </div>
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"


export default {
    props:['title'],
    components:{
        PHImg
    },
    data(){
        return{
    
            backImg:require('@/assets/imgs/backArrow.png')

        }
    },
    methods:{
        goBack(){
            this.$router.go(-1);
        }
    },
    mounted(){
        // alert(this.backImg);
    }

}
</script>
<style scoped lang="less">
.app-navi{
   width:100%;
   height: 44px;
   line-height: 44px;
   background-color:white;
}
.app-navi-back{
    width: 30px;
    height: 30px;
    top: 10px;
    left: 5px;
    // background-color: @color-bg;
    position: absolute;
}
.app-navi-title{
   font-size: @size-big;
   color: @color-black;
   text-align:center;
   height:100%;
}
</style>
