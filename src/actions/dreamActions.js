import { v4 } from 'uuid';

export const addDream = (dream)=> {
  return (dispatch, getState) => {
    //async call
    dispatch({
      type: 'ADD_DREAM',
      dreamName: dream.dreamName,
      dreamDetails: dream.dreamDetails,
      dreamImage: dream.dreamImage,
      id: v4(),
    })
  }
}
