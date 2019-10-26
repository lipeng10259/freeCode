// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
const axios = require('axios');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.prototype.$http = axios

Vue.config.productionTip = false

// router.beforeEach(function(to,form,next){
//   axios.get('http://localhost:3300/isLogin').then(function(res){
//     if(to.path == '/login'||to.path == '/register'){
     
//     } else {
//       if(res.data.errno == -1){
//         router.push('/login')
//       }  else {
//         next()
//       }   
//     }

//   })

// }) 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
