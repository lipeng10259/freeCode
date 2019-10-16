import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import siginIn from '@/components/siginIn/siginIn'
import siginUp from '@/components/siginUp/siginUp'
import article from '@/components/articleList/articleList'
import addArticle from '@/components/addArticle/addArticle'
import addType from '@/components/addType/addType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '首页',
      component: index,
      children:[
        {   
          path:'article',
          name:'文章列表',
          component: article
        },        
        {   
          path:'addArticle',
          name:'添加文章',
          component: addArticle
        },,        
        {   
          path:'addType',
          name:'添加类型',
          component: addType
        }
      ]
    },
    {
      path:'/login',
      name:'登录',
      component: siginIn
    },
    {
      path:'/register',
      name:'注册',
      component: siginUp
    }
    
  ]
})
