<template>
<div class="app" ref="app" :style="appStyle" >
  <keep-alive>
      <router-view v-if="$route.meta.keepAlive">
      </router-view>
  </keep-alive>    
  <router-view v-if="!$route.meta.keepAlive">
          <!-- 这里是不被缓存的视图组件 -->
  </router-view>
</div>
</template>
<script>
export default {
  data(){
      return{
        appStyle:{
            margin: '0px',
            width: '100%',
            height: "0px"
            // backgroundColor: 'red'
        }
      }
  },
  created(){
      let _this = this
      this.appStyle.height =  window.innerHeight+ 'px';
      this.$router.push({path:'/mainView'});    

      document.body.onresize = function (){
        _this.appStyle.height =  window.innerHeight+ 'px';
      }
      // alert('create');

  },
  mounted(){
      // alert('mounted')
  }
}
</script>

<style scoped lang="less">
.app{
  margin: 1px;
  width: 100%;
  background-color: @color-bg;
}
</style>
