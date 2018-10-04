import React, { Component } from 'react';
import { Modal } from 'react-materialize';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import Upload from 'material-ui-upload/Upload';
import { addDream } from '../../actions/dreamActions';

class CreateDream extends Component {
  state = {
    dreamName: null,
    dreamImage: null,
    dreamDetails: null,
  }


  onFileLoad = (e, file) => console.log(e.target.result, file.name);

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addDream(this.state);
    this.state.dreamName.value= '';
    this.state.dreamDetails.value='';
    document.getElementById('addDreamForm').reset();
  }

  render(){
    return(
      <Modal id='modal1'className='modal'>
        <form id='addDreamForm'onSubmit={this.handleSubmit}className="col s12">
          <div className='row'>
            <div className="input-field">
              <label htmlFor="dreamName">give your dream a short name</label>
              <input
                id="dreamName"
                type="text"
                className="validate"
                ref={(input)=>{this.state.dreamName = input;}}/>
            </div>
            <div className='input-field'>
              <input
                id="dreamDetails"
                type="text"
                ref={(input)=>{this.state.dreamDetails = input;}}/>
              <label htmlFor="dreamDetails">addtional details (optional)</label>
            </div>
            <button
               containerElement='label'
               label='My Label'
                onClick={this.onFileLoad}>
               <input type="file" />
            </button>
          </div>
          <button className='btn lime'type='submit'>add dream</button>
        </form>
        <br/>
      </Modal>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    addDream:(dream) => dispatch(addDream(dream))
  }
}
export default connect(null, mapDispatchToProps)(CreateDream);
