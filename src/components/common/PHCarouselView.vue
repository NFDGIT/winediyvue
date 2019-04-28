<template>
<div :style="phcarousel" ref="phcarousel">
    <div :style="scrollStyle" >
        <PHImg v-for="(item,index) of imgs" :key="index" :style="imgStyle" :src="item" ></PHImg>
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
            phcarousel:{
                height: 100 + '%',
                width: 100 + '%'
            },
            scrollStyle:{
                width:100 + "%",
                height:100 + "%",
            },
            imgStyle:{
                float: 'left',
                width:  100 + '%',
                height: 100 + '%',
            },
 
          

        }
    },
    mounted(){

        // alert(this.imgs.length);
        this.scrollStyle.width  = 100 * this.imgs.length + '%';
        this.imgStyle.width = 100 / this.imgs.length + '%';

        this.scroll = new BScroll(this.$refs.phcarousel,{
          scrollX:true
        });


    }

}
</script>
<style scoped>

</style>