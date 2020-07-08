<script>
	import { Router, Route } from 'yrv'
	import Home from '../pages/main/Home.svelte'
	import About from '../pages/main/About.svelte'
	import DataGridExemple from '../component/DataGridExemple.svelte'
	import DataGridExemple2 from '../grid/DataGridExemple.svelte'
	import NotFound from '../pages/exception/NotFound.svelte'
</script>

<Router>
	<Route exact path="/" redirect="/#!" />
	<Route exact path="#!" component={Home} />
	<Route exact path="#!/about" component={About} />
	<Route exact path="#!/grid" component={DataGridExemple} />
	<Route exact path="#!/grid2" component={DataGridExemple2} />
	<Route fallback component={NotFound} />
</Router>