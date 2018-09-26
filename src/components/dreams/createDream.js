import React from 'react';
import { Modal } from 'react-materialize';

const CreateDream = () => {
  return(
    <Modal>
    <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s6">
            <input placeholder="ie. buy a house, or run a marathon" id="dreamName" type="text" className="validate"/>
            <label htmlFor="dream name">give your dream a short name</label>
          </div>
          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"/>
            <label htmlFor="last_name">Last Name</label>
          </div>
        </div>
      </form>
    </div>
  </Modal>
  );
}
export default CreateDream;
