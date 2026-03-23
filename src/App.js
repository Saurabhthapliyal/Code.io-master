import React from "react";
import Home from "./components/Home";
import WebEditor from "./components/WebEditor";
import MarkdownEditor from "./components/MarkdownEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/web" component={WebEditor} />
        <Route path="/markdown" component={MarkdownEditor} />
      </Switch>
    </Router>
  );
}

export default App;
