import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import TweetsSearch from './components/TweetsSearch';


function App() {
  return (

      <Router>
              <Switch>
                  <Route exact path="/">
                      <TweetsSearch />
                  </Route>
              </Switch>
      </Router>


  );
}

export default App;
