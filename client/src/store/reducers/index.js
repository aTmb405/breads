import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import readings from './readings';
import currentList from './currentList';
import summary from './summary';
import info from './info';

const rootReducer = combineReducers({
    currentUser,
    errors,
    readings,
    currentList,
    summary,
    info
});
  
export default rootReducer;