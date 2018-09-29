import  dreamListReducer from './dream-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterDreamList: dreamListReducer
});

export default rootReducer;
