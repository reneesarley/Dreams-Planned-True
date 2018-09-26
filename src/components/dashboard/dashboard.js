import React, { Component } from 'react';
import UpcomingToDos from './upcomingtodos';
import DreamList from './dreamlist';

class Dashboard extends Component{
  render(){
    return(
      <div className='row'>
        <div className='col s8'>
          <DreamList/>
        </div>
        <div className='col s4'>
          <UpcomingToDos/>
        </div>
      </div>

    );
  }

}

export default Dashboard;
