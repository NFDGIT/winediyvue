<template>
    <div :style="wddiySwitchStyle">
       <button  v-for="(item,index) of ['酒箱','酒盒','酒瓶']" :key="index"  @click="selectCell(index)" :style="index == selectedIndex ?  wddiySwitchButtonSelected : wddiySwitchButton">{{ item }}</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selectedIndex:0,
            wddiySwitchStyle:{
                position:'absolute',
                left:'calc(50% - 95px)',
                top: '15px',
                width: '180px',
                height: '40px',
                backgroundColor: 'white',
                borderRadius:'20px',
                overflow:'hidden'
            },
            wddiySwitchButton:{
                fontSize:'13px',
                float:'left',
                width:'33%',
                height:'100%',
                backgroundColor:'white',
                border:'none',
                borderWidth: '0px',
                color: 'black'
            },
            wddiySwitchButtonSelected:{
                fontSize:'13px',
                float:'left',
                width:'33%',
                height:'100%',
                backgroundColor:'white',
                border:'none',
                borderWidth: '0px',
                color: 'red'
            }
        }
    },
    methods:{
        selectCell(index){
            // alert(index);
            this.selectedIndex = index;
        }
    }
}
</script>
<style scoped lang='less'>
// .wddiySwitchButton{
//     font-size:13px;
//     float:left;
//     width:33%;
//     height:100%;
//     background-color:white;
//     border:none;
//     border-width: 0px;
//     color: @color-black
// }
// .wddiySwitchButtonSelected{
//     font-size:13px;
//     float:left;
//     width:33%;
//     height:100%;
//     background-color:white;
//     border:none;
//     border-width: 0px;
//     color: red;
// }
</style>
