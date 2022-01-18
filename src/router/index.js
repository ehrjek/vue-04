import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '../components/login'
import index from '../components/index'
import cart from '../components/cart'
import shelvesBook from '../components/shelvesBook'
import myMessage from '../components/myMessage'
import myStore from '../components/myStore'
import myOrder from '../components/myOrder'
import myComment from '../components/myComment'
import mypage from '../components/mypage'
import register from '../components/register'
import item from '../components/item'
import searchBook from '../components/searchBook'
import Navigate from '../components/comment/navigate'
import top from '../components/comment/top'
Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', //  得到helloworl的vue 路由监听
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/user_login',
      name: 'user_login',
      component: login,
      child: {
        path: '/navigate',
        name: 'navigate',
        component: Navigate
      }
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/shelvesBook',
      name: 'shelvesBook',
      component: shelvesBook
    },
    {
      path: '/myMessage',
      name: 'myMessage',
      component: myMessage
    },
    {
      path: '/myStore',
      name: 'myStore',
      component: myStore
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/myComment',
      name: 'myComment',
      component: myComment
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: mypage
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/item',
      name: 'item',
      component: item
    },
    {
      path: '/searchBook',
      name: 'searchBook',
      component: searchBook,
      child: {
        path: '/top',
        name: 'v-top',
        component: top
      }
    }
  ]
})
