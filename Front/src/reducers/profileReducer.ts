import { listParametrsHorse } from '../DTO/listParametrHorse';

const initialState: any = {
  avatarUrl: '',
  galleryImageUrl: [],
  name: '',
  description: '',
  ownerContacts: '',
  pedigree: '',
  id: null,
  paramsHorse: {
    age: 2,
    sex: 'w',
    id: 'h4fd56gh4',
    type: 5,
    hoved: 7,
    skulder: 8,
    overlinie: 10,
    forlemmer: 10,
    baglemmer: 5,
    skridt: 3,
    trav: 7,
    galop: 5,
  },
  listParametrsHorse: [...listParametrsHorse],
};

export function profileReducer(state = initialState, action: any) {
  let stateObject: any = {
    'CHANGE_PARAMS_HORSE': changeParamsHorse(state, action),
    'GET_HORSE_PROFILE': getHorseProfile(state, action),
    'CHANGE_PROFILE_HORSE': changeProfileHorse(state, action),
  };

  return stateObject.hasOwnProperty(action.type) ? stateObject[action.type] : state;
};

function changeParamsHorse(state: any, action: any) {
  let newState = state;
  newState.paramsHorse[action.field] = action.value;
  return Object.assign({}, state, newState);
};

function getHorseProfile(state: any, action: any) {
  let newState = state;
  newState = action.horse;
  return Object.assign({}, state, newState);
};

function changeProfileHorse(state: any, action: any) {
  let newState = state;
  newState[action.field] = action.value;
  return Object.assign({}, state, newState);
};