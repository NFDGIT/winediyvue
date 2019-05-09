<template>
<div class="PHImgBack" @click="click">
<img class="PHImgContent" :src='src' alt="" :onerror="defaultImg">
</div>
</template>
<script>
export default {
    props:['src'],
    data(){
        return{
            // + require('@/assets/imgs/default.png') +
            defaultImg: 'this.src=" '+ require('@/assets/imgs/default.png') +'   "'
        }
    },
    methods:{
       click(){
           this.$emit('click');
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
.PHImgContent{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;

    /* background-color: red; */
}

</style>
