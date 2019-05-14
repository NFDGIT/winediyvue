<template >
    <div :style="diyBackStyle" >
    <WDDiyItem v-for="(layerParameter ,index) of layerParameters" :key="index" :index="index" :selectedIndex="selectedIndex" :layerParameter='layerParameter'></WDDiyItem>
    </div>
</template>
<script>

import WDDiyItem from '@/components/diy/WDDiyItem.vue'
// import AlloyFinger from 'alloyfinger'
export default {
    components:{
        WDDiyItem
    },
    props:['type','params'],
    // ,'layerParameters'
    watch:{
        params:{
            immediate:true,
            handler:function (newVal)
            {
                this.layerParameters = newVal;

            }
        
        }
    },
    data (){
        return {
        selectedIndex:0,
        layerParameters:[],
        diyBackStyle:{
            overflow: 'hidden',
            height: '300px',
            width: '300px',
            border:'none',
        }
        // layerParameters:[
        //     {type:0,
        //     textPara:{
        //         title:'0',
        //         color:'red',
        //     },
        //     angle:0,// 角度
        //     scale:0.5,// 缩放
        //     translateX:0,// x坐标
        //     translateY:0,// y坐标
        //     },
        //     {type:0,
        //     textPara:{
        //         title:'1',
        //         color:'red',
        //     },
        //     angle:20,// 角度
        //     scale:0.5,// 缩放
        //     translateX:0,// x坐标
        //     translateY:0,// y坐标
        //     },
        //     {type:0,
        //     textPara:{
        //         title:'2',
        //         color:'red',
        //     },
        //     angle:40,// 角度
        //     scale:0.5,// 缩放
        //     translateX:0,// x坐标
        //     translateY:0// y坐标
        //     },
        //     {type:1,
        //     imgPara:{
        //         name:'petter.png',
        //         img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3207781657,3460758070&fm=26&gp=0.jpg',
        //     },
            
        //     angle:60,// 角度
        //     scale:0.5,// 缩放
        //     translateX:0,
        //     translateY:0,
        //     }
        // ]
        }


    },
    methods: {
        addImg(){
            alert();
        },
        showBorder(isShow){
            if (isShow == null || isShow == false){
                this.diyBackStyle.border = 'none';
                this.diyBackStyle.overflow = 'hidden';
            }else{
                this.diyBackStyle.border = '1px solid yellow';
                this.diyBackStyle.overflow = 'visible';
            }
        }
    },
    mounted(){

    }


}
</script>
<style scoped>

</style>

