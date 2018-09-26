import React from 'react';
import DreamCard from '../dreams/dreamCard'
const DreamList = () => {
  return(
    <div>
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
