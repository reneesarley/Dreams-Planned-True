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
    id: null,
  }

  onFileLoad = (e, file) => console.log(e.target.result, file.name);

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      id: v4()
    })
    this.props.addDream(this.state);
    document.getElementById('addDreamForm').reset();
    console.log(this.state);
  }

  render(){
    return(
      <Modal id='modal1'className='modal'>
        <form id='addDreamForm'onSubmit={this.handleSubmit}className="col s12">
          <div className='row'>
            <div className="input-field">
              <label htmlFor="dreamName">give your dream a short name</label>
              <input id="dreamName" type="text" className="validate" onChange={this.handleChange} />
            </div>
            <div className='input-field'>
              <input id="dreamDetails" type="text" onChange={this.handleChange}/>
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
