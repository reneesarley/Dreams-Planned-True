import React, { Component } from 'react';
import UpcomingTasks from './upcomingtasks';

class Dashboard extends Component{
  render(){
    return(
      <div className='container'>
        this is the dashboard
        <UpcomingTasks/>
        <UpcomingTasks/>
      </div>

    );
  }

}

export default Dashboard;
