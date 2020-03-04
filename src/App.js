import React from 'react';
import './App.css';
import NavBar from './NavBar.js';
import { Switch, HashRouter, Route } from 'react-router-dom';
import HomePage from './HomePage.js';
import UserProfile from './UserProfile.js';
import Match from './Match.js';
import Preferences from './Preferences.js';
import Success from './Success.js';


function App() {
  return (
    <div className="App">
      <HashRouter basename="/StarLove">
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/my-profile" component={UserProfile} />
          <Route exact path="/my-preferences" component={Preferences} />
          <Route exact path="/match" component={Match} />
          <Route exact path="/success" component={Success}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
