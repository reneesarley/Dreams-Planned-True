import React from 'react';


const Todo = () => {
  return(
    <div className='row grey-blue lighten-3' style={styles.todo}>
      <div style={styles.todo} className='col s1'>
        <i className="material-icons valign-wrapper center-align" >check_box_outline_blank</i>
      </div>
      <div className=" col s10 truncate">
      <span className='lime-text text-darken-1'>Task:</span> Increase direct deposit to savings account
      </div>
      <div style={styles.todo} className='col s1 right-align'>
        9/25
      </div>
    </div>
  );
}

const styles={
  todo:{
    fontSize: '.9em',
    padding: '0',
    margin: '0'
  },
  highlight:{
    color: '#c6ff00',
  }
}

export default Todo;
