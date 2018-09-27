import React from 'react';
import { Modal } from 'react-materialize';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

let CreateDream = (props) => {
  console.log(props);
  let _dreamName= null;
  let _dreamImage = null;
  let _dreamDetails= null;

  function handleCreateDream(e){
    const { dispatch } = props;
    e.preventDefault();
    const action = {
      type: 'ADD_DREAM',
      dreamName: _dreamName.value,
      dreamDetails: _dreamDetails.value,
      dreamImage: null,
      id: v4(),
    };
    dispatch(action);
    _dreamName.value= '';
    _dreamDetails.value='';
    console.log("at the end of the function the dream name is " + _dreamName)

  }

  return(
    <Modal id='modal1'className='modal'>
      <form id='addDreamForm'onSubmit={handleCreateDream}className="col s12">
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
            ref={(input)=>{_dreamDetails = input;}}/>
        </div>
        <button className='btn lime'type='submit'>add dream</button>
      </form>
      <br/>
    </Modal>
  );
  document.getElementById('addDreamForm').reset();
}

export default connect()(CreateDream);
