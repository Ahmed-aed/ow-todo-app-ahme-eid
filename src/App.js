import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { ToDo } from "../src/pages/index";

const App = () => (
  <div className="App">
    <Router history={browserHistory}>
      <Switch>
        <Route exact path={"/"}>
          <ToDo />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
