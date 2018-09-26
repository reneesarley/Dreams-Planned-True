import React from 'react';
import { Modal } from 'react-materialize';

const CreateDream = () => {
  return(
    <Modal id='modal1'className='modal'>
      <form className="col s12">
        <input placeholder="ie. buy a house, or run a marathon" id="dreamName" type="text" className="validate"/>
        <label htmlFor="dream name">give your dream a short name</label>
      </form>
      <br/>
        <a href='/' className='modal-close btn lime'>add dream</a>
        <a href='/' className='modal-close btn lime'>start plan</a>
    </Modal>
  );
}
export default CreateDream;
