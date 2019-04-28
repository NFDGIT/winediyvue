<template>
<div class="content"> 
    <AppNavi title="我的作品"></AppNavi>

    <div class="wrapper" ref="wrapper">
        <div style="width:100%;">
           
        </div>
    </div>

</div>
</template>
<script>

import AppNavi from '@/components/AppNavi.vue'
import BScroll from 'better-scroll'

export default {
    components:{
        AppNavi
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
        })
    }
}
</script>
<style scoped>
.content{
   width: 100%;
   height: 100%;
}
</style>
