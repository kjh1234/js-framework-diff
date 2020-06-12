<script>
	import { Router, Route } from 'yrv'
	import Home from '../pages/main/Home.svelte'
	import About from '../pages/main/About.svelte'
	import NotFound from '../pages/exception/NotFound.svelte'
</script>

<Router>
	<Route path="/" component={Home} />
	<Route path="/about" component={About} />
	<Route path="*" component={NotFound} />
</Router>