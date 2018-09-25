import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Dashboard}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
