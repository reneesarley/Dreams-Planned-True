import React from 'react';
import { Modal } from 'react-materialize';

const CreateDream = (props) => {
  let _dreamName= null;
  let _dreamImage = null;
  let _dreamDetails= null;

  function handleCreateDream(e){
    e.preventDefault();
    console.log('dream created' + _dreamName.value + _dreamDetails.value)
    _dreamName= '';
    _dreamDetails='';
  }

  return(
    <Modal id='modal1'className='modal'>
      <form onSubmit={handleCreateDream}className="col s12">
        <div className='row'>
          <label htmlFor="dreamName">give your dream a short name</label>
          <input
            placeholder="ie. buy a house, or run a marathon"
            id="dreamName"
            type="text"
            className="validate"
            ref={(input)=>{_dreamName = input;}}/>
          <label htmlFor="dreamDetails">addtional details (optional)</label>
          <input
            placeholder='buy a house in portland in 5 years'
            id="dreamDetails"
            type="text"
            className="validate"
            ref={(input)=>{_dreamDetails = input;}}/>
        </div>
        <button className='btn lime'type='submit'>add dream</button>
      </form>
      <br/>
    </Modal>
  );
}
export default CreateDream;
