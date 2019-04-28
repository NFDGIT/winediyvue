<template>
<div class="content" ref='content' >


<AppNavi title="设置"></AppNavi>
<div class="scroll" ref="scroll">
    <div style="width:100%;">
        <MessageCell v-for="(item,index) of datas" :key="index" :item="item" @selectCell="selectCell(index)" ></MessageCell>
    </div>
</div>


</div>  
</template>
<script>
import BScroll from 'better-scroll'

import AppNavi from '@/components/AppNavi.vue'
import MessageCell from '@/components/message/MessageCell.vue'
export default {


   components:{AppNavi,MessageCell},
   data(){
       return {
           datas:[{title:'关于我们'},
                  {title:'退出登录'}
                 ]
       }
   },
   methods:{
        selectCell(index){
            if (index == 0){
                this.$router.push({path:'/aboutUs'});
            }else if (index == 1){
                this.$router.push({path:'/login'});
            }


        }
   },
   mounted(){
    //   this.$refs.content.style.height = window.innerHeight + 'px';
      this.scroll = new BScroll(this.$refs.scroll,{
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
.scroll{
    overflow: hidden;
    flex: 1;
}
</style>
