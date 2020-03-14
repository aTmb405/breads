import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import readings from './readings';

const rootReducer = combineReducers({
    currentUser,
    errors,
    readings
});
  
export default rootReducer;