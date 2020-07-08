import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/main/Home.vue'
import About from '../pages/main/About.vue'
import ImageList from "../pages/gif-finder/FetchList.vue";
import NotFound from '../pages/exception/NotFound.vue'

// 뷰 어플리케이션에 라우터 플러그인을 추가한다.
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/imageList', component: ImageList },
      { path: '*', component: NotFound }
    ]
  })
  
  export default router