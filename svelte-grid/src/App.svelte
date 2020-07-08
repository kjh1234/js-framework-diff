<script>
	import { Link } from 'yrv'
	import Routes from './routes/index.svelte'
</script>

<ul class="navigation-links">
	<li><Link href="/" className="btn">Home</Link></li>
	<li><Link href="#!/about" className="btn">About</Link></li>
	<li><Link href="#!/grid" className="btn">Grid</Link></li>
	<li><Link href="#!/grid2" className="btn">Grid2</Link></li>
	<li><Link href="#!/users" className="btn">Users</Link></li>
</ul>

<Routes />
