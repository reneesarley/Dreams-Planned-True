import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import NavBar from './components/navigation/navBar';
import DreamDetails from './components/dreams/dreamDetails';
import Profile from './components/profile/profile';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <NavBar/>
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/dreamdetails/:id' component={DreamDetails}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
