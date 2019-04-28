<template>
    <div class="MessageCell" @click="selectCell">
       <div class="MessageContent">{{ item.title }}</div>
    </div>
</template>
<script>
export default {
    props:['item'],
    methods:{
        selectCell(){
            this.$emit('selectCell','');
        }
    }
}
</script>
<style scoped lang='less'>
.MessageCell{
    width: 100%;
    // background-color: red;

};
.MessageContent{
    margin-top:10px;
    margin-bottom:10px;
    margin-left:10px;
    margin-right:10px;
    height: 30px;
   
    padding:10px;


    width:calc(100% - 40px);
    background-color:white;
    color: @color-black;
    font-size: @size-middle;
}


</style>
