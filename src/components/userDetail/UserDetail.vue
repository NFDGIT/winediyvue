<template>
<div class="content"> 
    <AppNavi title="用户详情"></AppNavi>

    <div class="wrapper" ref="wrapper">

        <div style="width:100%;overflow:hidden;">
            <PHImg class="headBack" :src="param" ></PHImg> 

            <div class="itemText" v-for="(item,index) of datas" :key="index" >{{ item }}  </div>

            <MainCommendGoodsCell v-for="(item,index) of commendGoods" :key="index" :item='item' @jumpToGoodsDetail='jumpToGoodsDetail'>
            </MainCommendGoodsCell>

        </div>

    </div>

</div>
</template>
<script>

import AppNavi from '@/components/AppNavi.vue'
import BScroll from 'better-scroll'
import PHImg from "@/components/common/PHImg.vue"

import MainCommendGoodsCell from  '@/components/main/MainCommendGoodsCell'
export default {
    // props:['param'],
    components:{
        MainCommendGoodsCell, AppNavi,PHImg
    },
    data(){
       return{
           param:'fg',
           datas:['helo','dfadf','dfadf','dfadf','dfadf'],
           commendGoods:[
              {name:'孙悟空',desc:'五百年前大闹天通',headImg:'',goodsImg:''},
              {name:'孙悟空',desc:'五百年前大闹天通',headImg:'',goodsImg:''},
              {name:'孙悟空',desc:'五百年前大闹天通',headImg:'',goodsImg:''},
              {name:'孙悟空',desc:'五百年前大闹天通',headImg:'',goodsImg:''},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:''},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:''},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:''}

            ]
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
.headBack{
    width: 100%;
    height: 300px;
}
.itemText{
    width: clac(100% - 40px) ;
    height:30px;
    margin:10px;
    padding: 10px;
    background-color: white;
}
</style>
