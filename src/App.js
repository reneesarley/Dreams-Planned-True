import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import NavBar from './components/navigation/navBar';
import DreamDetails from './components/dreams/dreamDetails';
import Profile from './components/profile/profile';
import CreateDream from './components/dreams/createDream';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <div className="container" style={styles.container}>
            <Switch>
              <Route exact path='/' component={Dashboard}/>
              <Route path='/dreamdetails/:id' component={DreamDetails}/>
              <Route path='/profile' component={Profile}/>
              <Route path = '/createdream' component={CreateDream}/>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const styles={
  container:{
    width: '95%',
    paddingTop: '20px'
  }
}

export default App;
