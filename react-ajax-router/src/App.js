import React from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index.js";

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
        <Link to="/imageList">
          <button>GIF 검색</button>
        </Link>
        <Link to="/users">
          <button>Users</button>
        </Link>
      </header>
      <hr />
      <main>
        <Routes />
      </main>
    </Router>
  );
}

export default App;
