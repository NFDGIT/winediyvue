<template>
<div class="content">  

<MainNaviView  @searchClick='jumpToSearch' @messageClick="jumpToMessage"></MainNaviView>

<div class="wrapper" ref="wrapper">
  <div style="margin:0px;padding:0px;">
    <!-- 刷新提示信息 -->
    <div class="top-tip">
      <span class="refresh-hook">{{pulldownMsg}}</span>
    </div>
     
     <PHCarouselView :imgs="['http://pic.90sjimg.com/design/00/31/96/95/574ba412112f5.jpg',
     'http://pic.90sjimg.com/design/00/31/96/95/574ba412112f5.jpg',
     'http://pic.90sjimg.com/design/00/31/96/95/574ba412112f5.jpg']" 
     style="height:150px;width:100%;">
     </PHCarouselView>
     <MainFuncView @selectCell="funcClick"></MainFuncView>

     <div style="width:100%;height:20px;background-color:rgba(0,0,0,0);"></div>  
     <MainCommendUserCell v-for="(item,index) of commendUsers" :key="'user' + index" :item='item' @jumpToUserDetail='jumpToUserDetail'>
     </MainCommendUserCell>

     <div style="width:100%;height:20px;background-color:rgba(0,0,0,0);"></div>   
     <MainCommendGoodsCell  v-for="(item,index) of commendGoods" :key="'goods' + index" :item='item' @jumpToGoodsDetail='jumpToGoodsDetail'>
     </MainCommendGoodsCell>
     <div style="clear:both"></div>

    <!-- 底部提示信息 -->
    <div class="bottom-tip">
      <span class="loading-hook">{{pullupMsg}}</span>
    </div>
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
        pulldownMsg: '下拉刷新',
        pullupMsg: '加载更多',
        commendUsers:[{name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:'http://pic192.gtobal.com/image1/6A/78/wKgSE1HkERyAURulAABGbLPpViM601.jpg'},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:'http://pic192.gtobal.com/image1/6A/78/wKgSE1HkERyAURulAABGbLPpViM601.jpg'},
              {name:'孙悟空',desc:'五百年前大闹天通',headImg:'',goodsImg:'http://pic192.gtobal.com/image1/6A/78/wKgSE1HkERyAURulAABGbLPpViM601.jpg'}],

        commendGoods:[
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'},
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'},
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'},
              {name:'孙悟空',desc:'五百年前大闹天空',headImg:'',goodsImg:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'},
              {name:'江湖策划师',desc:'在一买一卖中,连接了整个江湖',headImg:'',goodsImg:'http://img.redocn.com/sheji/20180517/baijiubaozhuangsheji_9415243.jpg.285.jpg'}

              ]
      }

    },
    methods:{
        refreshNewData(){
          this.axios.post('http://192.168.10.5:5000/chain').then((reponse) => {
            alert(reponse.data);
          })
        },
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
        let  _this  = this;
        this.scroll = new BScroll(this.$refs.wrapper,{
          probeType:1,
          click:true,
          mouseWheel: true,
        });
        // 滑动过程中事件
        this.scroll.on('scroll',(pos)=>{
          if(pos.y > 30){
            this.pulldownMsg = '释放立即刷新'
          }
        });
        
        //滑动结束松开事件
        this.scroll.on('touchEnd',(pos) =>{  //上拉刷新
          if(pos.y > 30){
            setTimeout(()=>{
              //恢复刷新提示文本值
              _this.pulldownMsg = '下拉刷新'
              //刷新成功后提示
              // that.refreshalert();
              //刷新列表后，重新计算滚动区域高度
              _this.scroll.refresh();
              // alert('refresh data');
              _this.refreshNewData();


            },2000)
          } 
          else if(pos.y<(this.scroll.maxScrollY - 30)){   //下拉加载
            _this.pullupMsg = '加载中。。。';
            setTimeout(()=>{
                //恢复文本值
                _this.pullupMsg = '加载更多';
                // that.data = this.data.concat(res);
                _this.scroll.refresh();
            },2000)
                            
          }
        })      









        
        

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


/* 下拉、上拉提示信息 */
.top-tip{
  position: absolute;  
  top: -40px;  
  left: 0;
  z-index: 1;  
  width: 100%;  
  height:40px;  
  line-height:40px;  
  text-align:center;
  color: #555;

}      
.bottom-tip{
  width: 100%;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #777;
  background: #f2f2f2;
  position: absolute;
  bottom: -35px;
  left: 0;
}
.refresh-hook{
  width: 100%;
  height: 100%;

}
.loading-hook{
  width: 100%;
  height: 100%;
}
</style>
