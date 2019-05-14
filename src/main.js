import Vue from 'vue'



// 
import Login from "@/components/loginAndRegister/Login"
import Register from "@/components/loginAndRegister/Register"
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

import DiscountCoupon from '@/components/discountCoupon/DiscountCoupon' // 优惠券
import InviteFriend from '@/components/inviteFriend/InviteFriend'       // 邀请好友
import MyFavorite from '@/components/myFavorite/MyFavorite'             // 我的喜欢
import MyFriend from '@/components/myFriend/MyFriend'                   // 我的好友
import MyIncome from '@/components/myIncome/MyIncome'                   // 我的收益
import MyOrder from '@/components/myOrder/MyOrder'                      // 我的订单
import EditUserInfo from '@/components/editUserInfo/EditUserInfo'       // 用户信息

import PlaceOrder from '@/components/placeOrder/PlaceOrder'             // 下单


// 购物车
import BuyCar from '@/components/buyCar/BuyCar.vue'



import VueRouter from 'vue-router'
import App from '@/App.vue'

import globalVeriable from '@/api/global_veriable.js'
import fun from '@/common/fun.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
// register the plugin on vue
import Toasted from 'vue-toasted';


Vue.prototype.GLOBAL = globalVeriable

Vue.use(VueRouter)
Vue.use(fun)
Vue.use(Toasted,{
  position:'top-center',
})


axios.defaults.crossDomain=true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.use(VueAxios, axios)

const router = new VueRouter({
    mode: 'history',
    routes:[

      {
        path: '/login',
        name: 'login',
        component: Login
      },    
      {
        path: '/register',
        name: 'register',
        component: Register
      },    
      
      {
        path: '/mainView',
        name: 'mainView',
        meta: {
          keepAlive: true
        },
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
      {
        path: '/discountCoupon',
        name: 'discountCoupon',
        component: DiscountCoupon
      },

      {
        path: '/inviteFriend',  // 邀请好友
        name: 'inviteFriend',
        component: InviteFriend
      },
      {
        path: '/myFavorite',  // 我的喜欢
        name: 'myFavorite',
        component: MyFavorite
      },
      {
        path: '/myFriend',  // 我的好友
        name: 'myFriend',
        component: MyFriend
      },
      {
        path: '/myIncome',  // 我的收益
        name: 'myIncome',
        component: MyIncome
      },
      {
        path: '/myOrder',  // 订单
        name: 'myOrder',
        component: MyOrder
      },
      {
        path: '/placeOrder',  // 下单
        name: 'placeOrder',
        component: PlaceOrder
      },
      
      {
        path: '/editUserInfo',  // 修改用户信息
        name: 'editUserInfo', 
        component: EditUserInfo
      },
      

//       import InviteFriend from '@/components/inviteFriend/InviteFriend'       // 邀请好友
// import MyFavorite from '@/components/myFavorite/MyFavorite'             // 我的喜欢
// import MyFriend from '@/components/myFriend/MyFriend'                   // 我的好友
// import MyIncome from '@/components/myIncome/MyIncome'                   // 我的收益
// import MyOrder from '@/components/myOrder/MyOrder'                      // 我的订单





      //  购物车
      {
        path: '/buyCar',
        name: 'buyCar',
        component: BuyCar
      },


      // tabbar 
      {
        path: '/tabbar/main',
        name: 'tabbar/main',
        component:MainView,
        // meta: {
        //   keepAlive: true
        // },
        children: [
          // 当 /user/:id 匹配成功，
          // UserHome 会被渲染在 User 的 <router-view> 中
          { path: '',       
            // meta: {
            //         keepAlive: true
            //       }, 
            component: Main 
          },
          // ...其他子路由
        ]
      },
      {
          path: '/wddiy',
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
        path: '/tabbar/me',
        name: 'tabbar/me',
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
