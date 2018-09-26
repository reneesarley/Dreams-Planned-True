import React, { Component } from 'react';
import UpcomingTasks from './upcomingtasks';
import DreamList from './dreamlist';

class Dashboard extends Component{
  render(){
    return(
      <div className='row'>
        <div className='col s9'>
          <DreamList/>
        </div>
        <div className='col s3'>
          <UpcomingTasks/>
        </div>
      </div>

    );
  }

}

export default Dashboard;
