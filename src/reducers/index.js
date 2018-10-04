import  dreamListReducer from './dream-list-reducer';
import authReducer from './auth-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterDreamList: dreamListReducer,
  auth: authReducer
});

export default rootReducer;
