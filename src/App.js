import React from "react";
import { counterSlice } from "./features/counter/counterSlice";

import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

function App() {
  const user = null;

  return (
    <div className="App">
      {user ? (
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        </Router>
      ) : (
        <LoginScreen />
      )}
    </div>
  );
}

export default App;
