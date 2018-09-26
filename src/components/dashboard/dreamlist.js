import React from 'react';
import DreamCard from '../dreams/dreamCard'
const DreamList = () => {
  return(
    <div>
      <h5>Dreams</h5>
      <div className="row">
        <DreamCard/>
        <DreamCard/>
        <DreamCard/>
        <DreamCard/>
        <DreamCard/>
      </div>
    </div>
  );

}

export default DreamList;
