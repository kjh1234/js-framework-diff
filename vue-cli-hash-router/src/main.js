import Vue from 'vue'
import App from './App.vue'
import  router  from './routes'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router, // ES6 문법으로, 키, 값이 같은면 하나만 작성해도 됩니다. router: router 와 같습니다
}).$mount('#app')