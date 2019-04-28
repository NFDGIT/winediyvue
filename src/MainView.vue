<template>
  <div id="app" ref="app">
    <router-view ></router-view>
    <Tabbar @itemClick="tabbarItemClick" :items="tabbarItems" :normalColor='"lightGray"' :selectedColor='"black"'></Tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar'

export default {
  name: 'app',
  components:{
    Tabbar
  },
  data(){
    return{
       tabbarItems:[
         {title:'首页',normalImg:require('@/assets/imgs/tabbarMain.png'),selectedImg:require('@/assets/imgs/tabbarMain1.png')},
         {title:'diy',normalImg:require('@/assets/imgs/tabbarDiy.png'),selectedImg:require('@/assets/imgs/tabbarDiy.png')},
         {title:'我的',normalImg:require('@/assets/imgs/tabbarMe.png'),selectedImg:require('@/assets/imgs/tabbarMe1.png')}
       ]
    }
  },
  methods:{
    tabbarItemClick(index){
      
      if (index == 0)
      {
         this.$router.push({path:'/tabbarMain'})
      }
      if (index == 1)
      {
         this.$router.push({path:'/tabbarWddiy'})
      }
      if (index == 2)
      {
         this.$router.push({path:'/tabbarMe'})
      }
  
    },
    
  },
  mounted(){

      // setTimeout(() => {
      //   this.tabbarItemClick(0);          
      // }, 2);

  }


}
</script>

<style scoped>
#app {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
