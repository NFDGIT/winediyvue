<template>
    <div class="meHeadView">

        <div style="text-align: center;width:60px;text-align:center;" @click="editUserInfo">
            <PHImg :src="userInfo" style="width:60px;height:60px;background-color:white;border-radius:30px;" />
            <div>{{ userInfo.name }}</div>
        </div>

    </div>
</template>
<script>
import PHImg from '@/components/common/PHImg.vue'
export default {
    props:['userInfo'],
    components:{
        PHImg
    },
    methods:{
        editUserInfo(){
    
            this.$emit('editUserInfo','');
        }
    }

}
</script>
<style scoped lang="less">
.meHeadView{
    width: 100%;
    height: 200px;
    background-color: @color-bg;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
