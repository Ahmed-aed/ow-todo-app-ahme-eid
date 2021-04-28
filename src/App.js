import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { ToDo } from "../src/pages/index";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <ToDo />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
