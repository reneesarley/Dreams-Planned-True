import dreamReducer from '../../reducers/dream-reducer';

describe('dreamReducer', () => {

  test('Should return default state if no action type is recoginized', () => {
    expect(dreamReducer({},{type:null})).toEqual({});
  });

});
