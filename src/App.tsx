import React from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./Components";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <div className="">
      <Router>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
