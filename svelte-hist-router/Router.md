## 라우터 추가

### 라우터 모듈(Hash/History 모두 지원)

```
// 모듈 추가
npm install yrv
```

### 라우터 History 설정

```
// App.svelte
... 생략 ...
import { Link, Router, Route } from "yrv";
... 생략 ...
<ul class="navigation-links">
	<li><Link href="/" className="btn">Home</Link></li>
	<li><Link href="/about" className="btn">About</Link></li>
	<li><Link href="/users" className="btn">Users</Link></li>
</ul>
... 생략 ...   
<Router>
	<Route exact path="/" redirect="/#!" />
	<Route exact path="#!" component={Home} />
	<Route exact path="#!/about" component={About} />
	<Route fallback component={NotFound} />
</Router>
```