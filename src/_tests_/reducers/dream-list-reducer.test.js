import dreamListReducer from '../../reducers/dream-list-reducer';

describe('dreamListReducer', () => {

  let action;
  const sampleDreamData = {
    dreamName : 'this is a test dream',
    dreamDetails : 'these are some details',
    dreamImage : 'this is null for now',
    id: 0
  };

  test('Should return default state if no action type is recoginized', () => {
    expect(dreamListReducer({},{type:null})).toEqual({});
  });


  test('Should successfully add new dream data to masterDreamList', () => {
    const { dreamName, dreamDetails, dreamImage, id } = sampleDreamData;
    action = {
      type: 'ADD_DREAM',
      dreamName : dreamName,
      dreamDetails : dreamDetails,
      dreamImage : dreamImage,
      id: id
    };
    expect(dreamListReducer({}, action)).toEqual({
      [id] : {
        dreamName : dreamName,
        dreamDetails : dreamDetails,
        dreamImage : dreamImage,
        id: id
      }
    });
  });

});
