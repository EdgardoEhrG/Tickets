import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const App = () => {
  return (
    <Router>
      <div className="App container">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/sign-in" component={Login} />
          <Route exact path="/sign-up" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
