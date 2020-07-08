import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/main/Home";
import About from "../pages/main/About";
import ImageList from "../pages/gif-finder/FetchList";
import NotFound from "../pages/exception/NotFound";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/imageList" component={ImageList} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
