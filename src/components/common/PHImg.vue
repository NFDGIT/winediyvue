<template>
<div class="PHImgBack" @click="click">
<img :style="imgContentStyle" :src='src' alt="" :onerror="defaultImg">
</div>
</template>
<script>
export default {
    props:['src','contentModel'],
    data(){
        return{
            imgContentStyle:{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
                minWidth:'',
                minHeight:'',

            },
            // + require('@/assets/imgs/default.png') +
            defaultImg: 'this.src=" '+ require('@/assets/imgs/default.png') +'   "'
        }
    },
    methods:{
       click(){
           this.$emit('click');
       }
    },
    mounted(){
            // this.imgContentStyle.maxWidth = '';
            // this.imgContentStyle.maxHeight = '';
            // this.imgContentStyle.minWidth = '100%';
            // this.imgContentStyle.minHeight = '100%';
            // this.imgContentStyle.width = 'auto';
            // this.imgContentStyle.height = 'auto';

        if (this.contentModel == 'fill')
        {


            this.imgContentStyle.backgroundSize = 'cover';
            this.imgContentStyle.width = '100%';
            this.imgContentStyle.height = '100%';
            this.imgContentStyle.backgroundRepeat =  'no-repeat';
            this.imgContentStyle.backgroundPosition = 'center';


            alert(this.imgContentStyle);
        }else{

        }
    }
}
</script>
<style scoped>

.PHImgBack{

    display: flex;
    justify-content:center;
    align-items:Center;
   
    overflow: hidden;

   /* background-color: aqua; */
}


</style>
