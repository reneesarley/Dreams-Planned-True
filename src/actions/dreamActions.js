import { v4 } from 'uuid';

export const addDream = (dream)=> {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    //async call
    const firestore = getFirestore();

    firestore.collection('dreams').add({
      ...dream,
      status: "still dreaming",
      }).then(() => {
          dispatch({
            type: 'ADD_DREAM',
            dreamName: dream.dreamName,
            dreamDetails: dream.dreamDetails,
            dreamImage: dream.dreamImage,
            id: v4()
          });
        }).catch(err => {
          dispatch({type: 'ADD_DREAM_ERROR'}, err);
    });
  }
};
