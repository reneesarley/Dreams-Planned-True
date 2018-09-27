import React from 'react';
import ToDo from './toDo';
import { Modal } from 'react-materialize';

const UpcomingToDos = () => {
  return(
    <div>

      <div style={styles.todoColumn} className='white'>
      <h5>to do</h5>

      <Modal
        header='to do details'
        trigger={<a waves='light'>
          <ToDo/>
        </a>}>
        <div>
            this is a test of the to do details modal
        </div>
      </Modal>
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
