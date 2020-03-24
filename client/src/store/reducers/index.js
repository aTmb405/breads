import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import readings from './readings';
import summary from './summary';
import users from './users';
import subscriptions from './subscriptions';

const rootReducer = combineReducers({
    currentUser,
    errors,
    readings,
    summary,
    users,
    subscriptions
});
  
export default rootReducer;