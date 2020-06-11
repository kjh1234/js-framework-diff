import React from "react";
import { Link, Route, Switch, HashRouter as Router } from "react-router-dom";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import NotFound from "./pages/exception/NotFound";

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
