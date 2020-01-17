import React from "react";
import { Route, Switch } from "react-router-dom";

import "./app.css";
import { CartPage, HomePage } from "../pages";
import Header from "../app-header";

const App = () => {
  return (
    <main role="main" >
      <Header/>
      <Switch>
        <Route path="/" component={HomePage} exact></Route>
        <Route path="/cart" component={CartPage}></Route>
      </Switch>
    </main>
  );
};

export default App;
