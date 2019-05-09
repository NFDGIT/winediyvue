<template>
<div class="alertView" ref="alertView" @click="hidden">
    
</div>    
</template>
<script>
export default {
 methods:{
    show(){
       document.body.appendChild(this.$refs.alertView);
    },
    hidden(){
       document.body.removeChild(this.$refs.alertView)
    }
 }    
}
</script>
<style scoped>
.alertView{
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
}
</style>
