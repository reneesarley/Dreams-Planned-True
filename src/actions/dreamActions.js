export const addDream = (dream)=> {
  return (dispatch, getState) => {
    //async call
    dispatch({
      type: 'ADD_DREAM',
      dream: dream
    })
  }
}
