import React, { Component } from 'react';
import UpcomingToDos from './upcomingtodos';
import DreamList from './dreamlist';
import { connect } from 'react-redux';

class Dashboard extends Component{
  render(){
    console.log(this.props);
    return(
      <div className='row'>
        <div className='col s8'>
          <DreamList dreamList={this.props.dreamList}/>
        </div>
        <div className='col s4'>
          <UpcomingToDos/>
        </div>
      </div>

    );
  }
}
const mapStateToProps=(state) => {
  return{
    dreamList: state.masterDreamList
  }
}

export default connect(mapStateToProps)(Dashboard);
