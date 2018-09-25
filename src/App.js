import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import NavBar from './components/navigation/navBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
