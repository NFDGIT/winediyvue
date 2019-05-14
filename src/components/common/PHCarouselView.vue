<template>
<div :style="phcarousel" ref="phcarousel">

    <div :style="scrollStyle" >
        <PHImg v-for="(item,index) in imgs" :key="index" :style="imgStyle" :src="item" ></PHImg>
        <!-- :contentModel="'fill'" -->
    </div>
    
    <div :style="pageVievStyle"> 
       <div v-for="(item,index) in imgs" :key="'page' + index" :style="index == selectedIndex ? pagePointSelectedStyle : pagePointStyle"> </div>
    </div>

</div>
</template>
<script>

import BScroll from 'better-scroll'
import PHImg from "@/components/common/PHImg.vue"
export default {
    props:['imgs'],
    components:{
        PHImg
    },
     
    data(){
        return{
            selectedIndex:0,
            phcarousel:{
                height: 100 + '%',
                width: 100 + '%',
                position:'relative',
            },
            scrollStyle:{
                // position:'absolute',
                width:100 + "%",
                height:100 + "%",
            },
            imgStyle:{
                float: 'left',
                width:  100 + '%',
                height: 100 + '%',
            },
            pageVievStyle:{
                position:'absolute',
    
                bottom:'0',
                left:'0',
                right:'0',
                margin:'auto',
            },
            pagePointStyle:{
                width:'10px',
                height:'10px',
                marginLeft:'10px',
                marginTop:'5px',
                marginBottom:'0px',
                backgroundColor:'gray',
                borderRadius:'50%',
                display:'inline-block'
            },
            pagePointSelectedStyle:{
                width:'10px',
                height:'10px',
                marginLeft:'10px',
                marginTop:'5px',
                marginBottom:'0px',
                backgroundColor:'orange',
                borderRadius:'50%',
                display:'inline-block'
            }
          

        }
    },
    mounted(){

        this.scrollStyle.width  = 100 * this.imgs.length + '%';
        this.imgStyle.width = 100 / this.imgs.length + '%';

        this.scroll = new BScroll(this.$refs.phcarousel,{
          scrollX:true,
          scrollY:false,
          mouseWheel: true,
          snap:{
            //   threshold:0.3,
            //   speed: 400,
          }
        });


    }

}
</script>
<style scoped>

</style>

