import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import NavBar from './components/navigation/navBar';
import DreamDetails from './components/dreams/dreamDetails';
import Profile from './components/profile/profile';
import CreateDream from './components/dreams/createDream';
import { connect } from 'react-redux';
import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedDream: null
    }
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar/>
          <div className="container" style={styles.container}>
            <Switch>
              <Route exact path='/' render={(props)=><Dashboard
                currentRouterPath={props.location.pathname}
                selectedDream={this.state.selectedDream}/>} />
              <Route path='/dreamdetails/:id' component={DreamDetails}/>
              <Route path='/profile' component={Profile}/>
              <Route path = '/signin' component={SignIn}/>
              <Route path = '/signup' component={SignUp}/>
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
