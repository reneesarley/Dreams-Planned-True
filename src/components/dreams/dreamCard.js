import React from 'react';
import image from '../../images/house.jpg';
import {Modal, Button, Icon} from 'react-materialize';


const DreamCard = () => {
  return(
    <div className='col s6 m4'>
    <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
      <Modal
    header='Modal Header'
    trigger={<Button waves='light'>OR ME!<Icon right>insert_chart</Icon></Button>}>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.</p>
  </Modal>
     <div style={styles.card}className="card">
       <div className="card-image">
         <img src={image} />
         <div style={styles.dreamTitle} className="card-title" >buy a house</div>
         <div style={styles.dreamStatus} className="card-title" >status: <span style={styles.status}>still dreaming</span></div>
       </div>
     </div>
    <div id="modal1" className="modal">
      <div className="modal-content">
        <h4>Modal Header</h4>
        <p>A bunch of text</p>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
      </div>
    </div>

    </div>
  );
}

const styles = {
  card:{
  },
  img:{
    objectFit: 'cover',
  },
  dreamTitle:{
    fontSize: '1em',
    bottom: '70%',
    padding: '3px',
    backgroundColor: 'rgba(38,50,56, 0.4)',
    width: '100%'
  },
  dreamStatus:{
    fontSize: '.75em',
    bottom: '5%',
    padding: '3px',
    backgroundColor: 'rgba(38,50,56, 0.45)',
    width: '100%'
  },
  status:{
    color: '#c6ff00',
  }
}

export default DreamCard;
