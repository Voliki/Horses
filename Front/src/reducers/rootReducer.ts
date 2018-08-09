import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { appReducer } from './appReducer';
import { profileReducer } from './profileReducer';
import { filtersReducer } from './filtersReducer';
import { listHorseReducer } from './listHorseReducer';
import { resultOfCrossingReducer } from './resultOfCrossingReducer';

export default function createReducer(injectedReducers: any) {
  return combineReducers({
    appUser: appReducer,
    router: routerReducer,
    profile: profileReducer,
    filters: filtersReducer,
    listHorse: listHorseReducer,
    resultOfCrossing: resultOfCrossingReducer,
    ...injectedReducers,
  });
};