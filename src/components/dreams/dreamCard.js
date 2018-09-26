import React from 'react';
import image from '../../images/house.jpg';

const DreamCard = () => {
  return(
    <div className='col s6 m4'>
     <div style={styles.card}className="card">
       <div className="card-image">
         <img src={image} />
         <div style={styles.dreamTitle} className="card-title" >buy a house</div>
         <div style={styles.dreamStatus} className="card-title" >status: <span style={styles.status}>still dreaming</span></div>
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
    fontSize: '1.25em',
    bottom: '70%',
    padding: '3px',
    backgroundColor: 'rgba(0,96,100, 0.7)',
    width: '100%'
  },
  dreamStatus:{
    fontSize: '.75em',
    bottom: '7%',
    padding: '3px',
    backgroundColor: 'rgba(0,96,100, 0.7)',
    width: '100%'
  },
  status:{
    color: '#c6ff00',
  }
}

export default DreamCard;
