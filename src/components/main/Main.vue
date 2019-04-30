<template>
<div class="content">  

<MainNaviView  @searchClick='jumpToSearch' @messageClick="jumpToMessage"></MainNaviView>

<div class="wrapper" ref="wrapper">
  <div style="margin:0px;padding:0px;overflow:hidden;">
     
     


     <PHCarouselView :imgs="['','','']" style="height:150px;width:100%;"></PHCarouselView>
     <MainFuncView @selectCell="funcClick"></MainFuncView>

     <div style="width:100%;height:20px;background-color:rgba(0,0,0,0);"></div>  
     <MainCommendUserCell v-for="(item,index) of commendUsers" :key="'user' + index" :item='item' @jumpToUserDetail='jumpToUserDetail'>
     </MainCommendUserCell>

     <div style="width:100%;height:20px;background-color:rgba(0,0,0,0);"></div>   
     <MainCommendGoodsCell v-for="(item,index) of commendGoods" :key="'goods' + index" :item='item' @jumpToGoodsDetail='jumpToGoodsDetail'>

     </MainCommendGoodsCell>
  </div>
</div>


</div>
</template>
<script>




import MainNaviView from '@/components/main/MainNaviView'

import PHCarouselView from '@/components/common/PHCarouselView'

import MainFuncView from '@/components/main/MainFuncView'

import MainCommendUserCell from  '@/components/main/MainCommendUserCell'
import MainCommendGoodsCell from  '@/components/main/MainCommendGoodsCell'



import BScroll from 'better-scroll'

export default {
    components:{
      MainNaviView,
      PHCarouselView,
      MainFuncView,
      MainCommendUserCell,
      MainCommendGoodsCell,
    },
    data(){
      return{

        commendUsers:[{name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:''},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:''},
              {name:'孙悟空',desc:'五百年前大闹天通',headImg:'',goodsImg:''}],

        commendGoods:[
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:''},
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:''},
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:''},
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:''},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:''},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:''},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:''}

              ]
      }

    },
    methods:{
        funcClick(index){
           if (index == 0)
           {
              this.jumpToClassIntroduce();
           }else if (index == 1){
              this.jumpToNoviceRaider();
           }else if (index == 2){
              this.jumpToActivityCenter();
           }
        },
        jumpToActivityCenter(){
          this.$router.push({path:'/activityCenter'});
        },
        jumpToClassIntroduce(){
          this.$router.push({path:'/classIntroduce'});
        },
        jumpToNoviceRaider(){
          this.$router.push({path:'/noviceRaider'});
        },


        jumpToSearch(){
          this.$router.push({path:'/searchUser'});
        },
        jumpToMessage(){
          this.$router.push({path:'/message'});
        },
        jumpToUserDetail(){
          this.$router.push({path:'/userDetail'});
           
        },
        jumpToGoodsDetail(){
          this.$router.push({path:'/goodsDetail'});
        }
    },

    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
          click:true
        });

        
        

        //  alert(alertview);
        // let alertview = new PHAlertView();
        // alert('before');
        // alertview.show();
        // alert('after');
        // this.jumpToUserDetail();
    }

}
</script>
<style scoped>
.content{
  width: 100%;
  overflow: hidden;
  flex: 1;

  display: flex;
  flex-direction: column;
}
.wrapper{
  width: 100%;
  overflow: hidden;
  flex: 1;

}
</style>
