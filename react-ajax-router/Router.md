## 라우터 추가

### 라우터 모듈(Hash/History 모두 지원)

```
// 모듈 추가
npm i react-router-dom
```

### 라우터 History 설정

```
// App.js
... 생략 ...
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
... 생략 ...

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
... 생략 ...     
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
  );
}
```