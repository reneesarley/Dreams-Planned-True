const initState = {
    ['123']: {
      dreamName: 'buy a house',
      dreamDetails: 'buy a house in portland',
      dreamImage: 'no image yet',
      status: "still dreaming",
      id: '123'
    },
    ['124']: {
      dreamName: 'adopt a senior dog',
      dreamDetails: '',
      dreamImage: 'no image yet',
      status: "completed!",
      id: '124'
    },
}

export default (state = initState, action) => {
  switch (action.type) {
  case 'ADD_DREAM':
    const { dreamName, dreamDetails, dreamImage, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        dreamName: dreamName,
        dreamDetails: dreamDetails,
        dreamImage: dreamImage,
        status: "still dreaming",
        id: id
      }
    });
  case 'ADD_DREAM_ERROR':
    console.log('add dream error', action.err) ;
    return newState;
  default:
    return state;
  }
};
