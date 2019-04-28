<template>
    <div class="tabbar">

        <div style="position:absolute;width:100%;height:1px;background-color:aliceblue;"></div>

        <div  class="item"  v-for="(item,index) in items" :key="index" @click="onclick(index)">
            <div v-if="index == selectedIndex">
               <img  class="itemImg" :src="item.selectedImg" :onerror="defaultImg" />      
               <div  :style="itemTextSelected">   {{ item.title }} </div>
            </div>
            <div v-else>
                <img  class="itemImg" :src="item.normalImg" :onerror="defaultImg" />      
                <div  :style="itemText">   {{ item.title }} </div>
            </div>


        </div>

    </div>
</template>
<script>
export default {
    props:['items','normalColor','selectedColor'],
    data(){
        return{
            itemText:{
                fontSize:'12px',
                color: 'black',
                height:'13px',
                width:'100%',
                position:'relative',
                bottom:'5px'
            },
            itemTextSelected:{
                fontSize:'12px',
                color: 'red',
                height:'13px',
                width:'100%',
                position:'relative',
                bottom:'5px'
            },
            defaultImg: 'this.src="' + require('@/assets/imgs/default.png') + '"',
            selectedIndex : 0,
        }
    },
    methods:{
        onclick(index){
            this.selectedIndex = index
            this.$emit('itemClick',this.selectedIndex)
        },
        refreshTabbar(){
            
        }
       
    },
    mounted(){
        if (this.normalColor) {
            this.itemText.color = this.normalColor
        }
        if (this.selectedColor) {
            this.itemTextSelected.color = this.selectedColor
        }

    }
}
</script>
<style scoped lang='less'>
.tabbar{
    width: 100%;
    background-color: white;
}
.item{
    float: left;
    text-align: center;
    width: 33.3%;
    height: 100%;
    border-color: rgba(0, 0, 0, 0);
    background-color: rgba(0, 0, 0, 0);
}

.itemImg{
    height:30px;
    width:30px;
    // background-color:@color-bg;
    margin:0px;
    padding:0px;
}
</style>
