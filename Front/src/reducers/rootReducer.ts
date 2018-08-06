import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { appReducer } from './appReducer';
import { profileReducer } from './profileReducer';

export default function createReducer(injectedReducers: any) {
  return combineReducers({
    appUser: appReducer,
    router: routerReducer,
    profile: profileReducer,
    ...injectedReducers,
  });
};