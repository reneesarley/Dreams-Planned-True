const initState = {
    ['123']: {
      dreamName: 'buy a house',
      dreamDetails: 'buy a house in portland',
      dreamImage: 'no image yet',
      id: '123'
    },
    ['124']: {
      dreamName: 'adopt a senior dog',
      dreamDetails: '',
      dreamImage: 'no image yet',
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
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
