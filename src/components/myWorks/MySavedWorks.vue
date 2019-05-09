<template>
<div class="content"> 
    <AppNavi title="我的保存"></AppNavi>

    <div class="wrapper" ref="wrapper">
        <div style="width:100%;overflow:hidden;">

            <div class="itemStyle" v-for="(item,index) in datas" :key="index" @click="selectCell(index)">
      
                <div style="margin:10px;padding-top:10px;color:rgba(0,0,0,0.8);font-size:14px;">{{ item.name + " " + item.desc}}</div>
                <PHImg  style="margin-left:20px;display:inline-block;width:50;height:50px;"  v-for="(workitem,worksindex) in item.works" :key="worksindex" :src="workitem">
                </PHImg>
            </div>

        </div>
    </div>

</div>
</template>
<script>

import AppNavi from '@/components/AppNavi.vue'
import BScroll from 'better-scroll'
import PHImg from "@/components/common/PHImg.vue"

export default {
    components:{
        AppNavi,
        PHImg
    },
    data(){
        return{
            datas:[]
        }
    },
    methods:{
        refreshNewData(){


            let key = "localWorksKey";
    
            let localWorks = this.getLocalItem(key);
            if (localWorks == null){
                localWorks = []
            }

            this.datas = localWorks

            this.scroll.refresh();
            
        },
        selectCell(index){
            let data = this.datas[index];
            
            this.$router.push({name:'goodsDetail',
                                params:{
                                data:data
                                }
            });


        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            mouseWheel:true,

        })
        this.refreshNewData();

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
.itemStyle{
    margin-top: 5px;
    width: 100%;

    background-color: white;
    /* word-break: break-all; */
}
</style>
