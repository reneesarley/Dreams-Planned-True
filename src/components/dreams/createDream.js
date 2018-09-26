import React from 'react';
import { Modal } from 'react-materialize';

const CreateDream = () => {
  return(
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="ie. buy a house, or run a marathon" id="dreamName" type="text" className="validate"/>
            <label htmlFor="dream name">give your dream a short name</label>
          </div>
        </div>
      </form>
      <div className='modal-footer'>
        <a href='/' className='modal-close btn lime'>add dream</a>
        <a href='/' className='modal-close btn lime'>start planning now</a>
      </div>

    </div>
  );
}
export default CreateDream;
