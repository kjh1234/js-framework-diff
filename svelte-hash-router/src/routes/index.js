import Home from '../pages/main/Home.svelte'
import About from '../pages/main/About.svelte'
import NotFound from '../pages/exception/NotFound.svelte'

const routes = {
    // Exact path
    '/': Home,

    // Wildcard parameter
    '/about': About,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
}
export default routes