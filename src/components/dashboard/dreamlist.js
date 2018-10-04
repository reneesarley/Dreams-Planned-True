import React from 'react';
import DreamCard from '../dreams/dreamCard'

function DreamList(props) {
  if(Object.keys(props.dreamList).length == 0){
    return(
      <div>
        You haven't added any dreams yet.
      </div>
    );
  }
  return(
    <div>
      <hr/>
        {Object.keys(props.dreamList).map(function(dreamId) {
          var dream = props.dreamList[dreamId];
          return <DreamCard
                  name={dream.dreamName}
                  status={dream.status}/>;
        })}
    </div>
  );
}

export default DreamList;
