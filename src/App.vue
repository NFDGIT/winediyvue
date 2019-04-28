<template>
<div class="app" ref="app"  >

      <router-view></router-view>

</div>
</template>
<script>
export default {

  mounted(){
      this.$refs.app.style.height = window.innerHeight+ 'px';
      this.$router.push({path:'/mainView'});
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
