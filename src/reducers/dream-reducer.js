export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_DREAM':
    const { dreamName, dreamDetails, dreamImage, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        dreamName: dreamName,
        dreamDetails: dreamDetails,
        dreamImage: dreamImage,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
