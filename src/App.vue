<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
     
    <!-- <WDDiy type="1" />  -->
  </div>
</template>

<script>
import WDDiy from './components/WDDiy.vue'

export default {
  name: 'app',
  components: {
    WDDiy
  },
  metaInfo:{
    title:'hello swift'
  }

}
</script>



<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
