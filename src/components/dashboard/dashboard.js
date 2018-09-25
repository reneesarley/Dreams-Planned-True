import React, { Component } from 'react';
import UpcomingTasks from './upcomingtasks';
import DreamList from './dreamlist';

class Dashboard extends Component{
  render(){
    return(
      <div className='container'>
        this is the dashboard
        <DreamList/>
        <UpcomingTasks/>
      </div>

    );
  }

}

export default Dashboard;
