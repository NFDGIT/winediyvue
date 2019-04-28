<template>
<div class="content"> 
    <AppNavi title="作品详情"></AppNavi>

    <div class="wrapper" ref="wrapper">

        <div style="width:100%;">
            <PHCarouselView :imgs="['','','']" style="height:300px;width:100%;"></PHCarouselView>

            <div class="itemText" v-for="(item,index) of datas" :key="index" >{{ item }}  </div>

        </div>

    </div>

</div>
</template>
<script>

import AppNavi from '@/components/AppNavi.vue'
import BScroll from 'better-scroll'

import PHCarouselView from '@/components/common/PHCarouselView'

// import PHImg from "@/components/common/PHImg.vue"

export default {
    // props:['param'],
    components:{
        AppNavi,PHCarouselView
    },
    data(){
       return{
           param:'fg',
           datas:['helo','dfadf','dfadf','dfadf','dfadf']
       }
    },
    methods:{
        jumpToGoodsDetail(){
            this.$router.push({path:'/goodsDetail'});
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true
        })
    }
}
</script>
<style scoped>
.content{
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   overflow: hidden;
}
.wrapper{
    overflow: hidden;
    flex: 1;

}
/* .headBack{
    width: 100%;
    height: 300px;
} */
.itemText{
    width: clac(100% - 40px) ;
    height:30px;
    margin:10px;
    padding: 10px;
    background-color: white;
}
</style>
