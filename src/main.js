import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

let globalData = new Vue({
  data: {
    $isLogin: true,
    $isEmailVerified: true,
  } 
})
Vue.mixin({
  computed: {
    $isLogin: {
      get: function () { return globalData.$data.$isLogin },
      set: function (newIsLogin) { globalData.$data.$isLogin = newIsLogin; }
    },
    $isEmailVerified: {
      get: function () { return globalData.$data.$isEmailVerified },
      set: function (newIsEmailVerified) { globalData.$data.$isEmailVerified = newIsEmailVerified; }
    },
  }
})