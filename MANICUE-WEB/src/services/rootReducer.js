import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth from './auth/reducer';
import users from './users/reducer';
import salons from './salons/reducer';
import dialog from './dialog/reducer';

export const rootReducer = combineReducers({
  auth,
  users,
  salons,
  dialog,
  routing: routerReducer
});
