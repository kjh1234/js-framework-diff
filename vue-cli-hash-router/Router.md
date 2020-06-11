## 라우터 추가

### 라우터 모듈(Hash/History 모두 지원)

```
// 모듈 추가
npm install vue-router
```

### 라우터 Hash 설정

```
// routes/index.js
... 생략 ...
import VueRouter from 'vue-router'
... 생략 ...

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'hash',
    routes: [
      { path: '/', component: Home },
... 생략 ...
    ]
  })
```