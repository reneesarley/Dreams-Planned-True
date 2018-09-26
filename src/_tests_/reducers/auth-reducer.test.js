import authReducer from '../../reducers/auth-reducer';

describe('authReducer', () => {

  test('Should return default state if no action type is recoginized', () => {
    expect(authReducer({},{type:null})).toEqual({});
  });

});
