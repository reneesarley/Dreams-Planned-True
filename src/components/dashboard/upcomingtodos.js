import React from 'react';
import ToDo from './toDo';

const UpcomingToDos = () => {
  return(
    <div>

      <div style={styles.todoColumn} className='white'>
      <h5>to do</h5>
        <ToDo/>
        <ToDo/>
        <ToDo/>
        <ToDo/>
        <ToDo/>
        <ToDo/>
        <h5>recently completed</h5>
        <ToDo/>
        <ToDo/>
      </div>
    </div>
  );
}

const styles={
  todoColumn:{
    padding: '20px',
    paddingTop: '10px',
  }
}

export default UpcomingToDos;
