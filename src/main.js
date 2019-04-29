import Vue from 'vue'



// 
import Login from "@/components/login/Login"
import MainView from '@/MainView'
import WDDiy from '@/components/diy/WDDiy'
import Main from '@/components/main/Main'
import Me from '@/components/me/Me'

// 首页
import Message from '@/components/message/Message'
import SearchUser from '@/components/searchUser/SearchUser'
import UserDetail from '@/components/userDetail/UserDetail'
import GoodsDetail from '@/components/goodsDetail/GoodsDetail'
import ActivityCenter from "@/components/activityCenter/ActivityCenter"
import ClassIntroduce from "@/components/classIntroduce/ClassIntroduce"
import NoviceRaider from "@/components/noviceRaider/NoviceRaider"

// 预览
import PreView from "@/components/preview/PreView"

// 我的
import MySavedWorks  from '@/components/myWorks/MySavedWorks'
import MyWorks from '@/components/myWorks/MyWorks'
import Setting from '@/components/setting/Setting'
import AboutUs from '@/components/aboutUs/AboutUs'



import VueRouter from 'vue-router'
import App from '@/App.vue'

import globalVeriable from '@/api/global_veriable.js'
Vue.prototype.GLOBAL = globalVeriable

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes:[

      {
        path: '/login',
        name: 'login',
        component: Login
      },    
      {
        path: '/mainView',
        name: 'mainView',
        components:{
          default:MainView
        } 
      },

      // 首页
      {
        path: '/message',
        name: 'message',
        component: Message
      },
      {
        path: '/searchUser',
        name: 'searchUser',
        component: SearchUser
      },
      {
        path: '/userDetail',
        name: 'userDetail',
        component: UserDetail
      },
      {
        path: '/goodsDetail',
        name: 'goodsDetail',
        component: GoodsDetail
      },
      {
        path: '/setting',
        name: 'setting',
        component: Setting
      },
      {
        path: '/activityCenter',
        name: 'activityCenter',
        component: ActivityCenter
      },
      {
        path: '/noviceRaider',
        name: 'noviceRaider',
        component: NoviceRaider
      },
      {
        path: '/classIntroduce',
        name: 'classIntroduce',
        component: ClassIntroduce
      },
      // diy
      {
        path: '/preView',
        name: 'preView',
        component: PreView
      },


      // 我的
      {
        path: '/mySavedWorks',
        name: 'mySavedWorks',
        component: MySavedWorks
      },
      {
        path: '/myWorks',
        name: 'myWorks',
        component: MyWorks
      },
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: AboutUs
      },
      


      // tabbar 
      {
        path: '/tabbarMain',
        name: 'tabbarMain',
        component:MainView,
        children: [
          // 当 /user/:id 匹配成功，
          // UserHome 会被渲染在 User 的 <router-view> 中
          { path: '', component: Main },
          // ...其他子路由
        ]
      },
      {
          path: '/tabbarWddiy',
          name: 'wddiy',
          component:WDDiy,
          // component:MainView,
          // children: [
          //   // 当 /user/:id 匹配成功，
          //   // UserHome 会被渲染在 User 的 <router-view> 中
          //   { path: '', component: WDDiy },
          //   // ...其他子路由
          // ]
      },
      {
        path: '/tabbarMe',
        name: 'me',
        component:MainView,
        children: [
          // 当 /user/:id 匹配成功，
          // UserHome 会被渲染在 User 的 <router-view> 中
          { path: '', component: Me },
          // ...其他子路由
        ]
      }
   ]
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
