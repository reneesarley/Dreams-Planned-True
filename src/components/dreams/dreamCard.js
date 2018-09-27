import React from 'react';
import image from '../../images/house.jpg';
import DreamDetails from './dreamDetails';
import {Modal} from 'react-materialize';


const DreamCard = () => {
  return(
    <div className='col s6 m6'>
      <Modal
        header='Dream Details'
        trigger={<a waves='light'>
          <div style={styles.card}className="card">
            <div className="card-image">
              <img src={image} />
              <div style={styles.dreamTitle} className="card-title" >buy a house</div>
              <div style={styles.dreamStatus} className="card-title" >status: <span style={styles.status}>still dreaming</span></div>
            </div>
          </div>
        </a>}>
        <div>
            <DreamDetails/>
        </div>
      </Modal>
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
    fontSize: '1.1em',
    bottom: '80%',
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
