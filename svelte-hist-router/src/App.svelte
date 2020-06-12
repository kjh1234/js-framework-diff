<script>
	import { Link } from 'yrv'
	import Router from './routes/index.svelte'
</script>

<ul class="navigation-links">
	<li><Link href="/" className="btn">Home</Link></li>
	<li><Link href="/about" className="btn">About</Link></li>
	<li><Link href="/users" className="btn">Users</Link></li>
</ul>

<Router />

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