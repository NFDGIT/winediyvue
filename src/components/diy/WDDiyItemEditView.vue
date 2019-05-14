<template>
<div class="diyItemEditViewStyle">


<div class="funcItemStyle" v-for="(item,index) in funcItems" :key="index"  @click="selectCell(index)">

<PHImg class="diyImgStyle" :src='item.img' ></PHImg>
<div class="diyItemEditViewTextStyle">{{ item.title }}</div>
</div>

</div>
</template>
<script>
import PHImg from "@/components/common/PHImg.vue"

export default {
    components:{
        PHImg
    },
    methods:{
        selectCell(index){
            if (index == 0)
            {
                this.$emit('editText','');
            }
        }
    },
    data(){
        return{
            funcItems:[{title:"编辑",img:""}]            
        }
    }

}
</script>
<style scoped>
.diyItemEditViewStyle{
   width: 200px;
   height: 40px;
}
.funcItemStyle{
    width:40px;
    height:40px;;
    display:flex;
    flex-direction:column;
    justify-content: center;
    background-color:rgba(200, 200, 200, 0.8);
    align-items: center;
    margin-left:10px;
    border-radius: 5px;
}
.diyImgStyle{
    width: 30px;
    height: 30px;
}
.diyItemEditViewTextStyle{
    font-size: 12px;
    color: rgba(0, 0, 0, 0.8);
}

</style>
