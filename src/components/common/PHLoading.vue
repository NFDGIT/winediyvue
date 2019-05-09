<template>
    <div :style="phloadingStyle">
       <div class="hintTitle">{{ hintTitle }}</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            hintTitle:'',
            phloadingStyle:{
                top:'0px',
                position:'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                visibility: 'hidden',
     
            }

        }
    },
    methods:{
        show(text){
            this.hintTitle = text;
            this.phloadingStyle.visibility = 'visible';
        },
        hidden(){
            this.phloadingStyle.visibility = 'hidden';
        }
    }
}
</script>
<style scoped>
.hintTitle{
    width:100px;
    height:100px;
    line-height: 100px;
    background-color: white;
    text-align: center;
    border-radius: 10px;

}
</style>
