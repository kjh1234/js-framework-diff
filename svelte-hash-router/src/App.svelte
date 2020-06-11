<script>
	import Router from 'svelte-spa-router'
	import {link} from 'svelte-spa-router'
	import active from 'svelte-spa-router/active'
	import routes from './routes'
</script>


<ul class="navigation-links">
    <li><a href="/" use:link use:active>Home</a></li>
    <li><a href="/about" use:link>About</a></li>
    <li><a href="/users" use:link>Users</a></li>
</ul>

<Router {routes}/>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>