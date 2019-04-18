import Vue from 'vue'
// import App from './App.vue'
import WDDiy from './components/WDDiy.vue'
// import WDDiySelectFile from './components/WDDiySelectFile.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(WDDiy),
}).$mount('#app')
