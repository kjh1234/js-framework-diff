<script>
	import { Router, Route } from 'yrv'
	import Home from '../pages/main/Home.svelte'
	import About from '../pages/main/About.svelte'
	import FetchList from '../pages/gif-finder/FetchList.svelte'
	import NotFound from '../pages/exception/NotFound.svelte'
</script>

<Router>
	<Route exact path="/" redirect="/#!" />
	<Route exact path="#!" component={Home} />
	<Route exact path="#!/about" component={About} />
	<Route exact path="#!/imageList" component={FetchList} />
	<Route fallback component={NotFound} />
</Router>