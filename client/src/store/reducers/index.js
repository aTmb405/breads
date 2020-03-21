import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import readings from './readings';
import currentList from './currentList';
import summary from './summary';

const rootReducer = combineReducers({
    currentUser,
    errors,
    readings,
    currentList,
    summary
});
  
export default rootReducer;