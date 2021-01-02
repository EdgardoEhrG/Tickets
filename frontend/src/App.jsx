import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import Dashboard from "./containers/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "./layouts/Navbar/Navbar";
import FilteredTable from "./components/Table/FilteredTable";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Navbar />
          <div className="App container">
            <Switch>
              <Route exact path="/" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute
                exact
                path="/tickets/:status/:type"
                component={FilteredTable}
              />
              <Route exact path="/sign-in" component={Login} />
              <Route exact path="/sign-up" component={Register} />
            </Switch>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
