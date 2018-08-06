const initialState: any = {
  age: 10,
  id: 'gf4fjht1',
  hoved: 10,
  overlinie: 10,
  baglemmer: 10,
  trav: 10,
  sex: 'm',
  type: 10,
  skulder: 10,
  forlemmer: 10,
  skridt: 10,
  galop: 10,
  avatarUrl: '',
  galleryImageUrl: [],
  name: '',
  description: '',
  ownerContacts: '',
  pedigree: '',
};

export function profileReducer(state = initialState, action: any) {
  let stateObject: any = {
    'CHANGE_PARAMS_HORSE': changeParamsHorse(state, action),
    'GET_HORSE_PROFILE': getHorseProfile(state, action),
  };
  
  return stateObject.hasOwnProperty(action.type) ? stateObject[action.type] : state;
};

function changeParamsHorse(state: any, action: any) {
  let newState = state;
  newState[action.faield] = action.value;
  return Object.assign({}, state, newState);
};

function getHorseProfile(state: any, action: any) {
  let newState = state;
  newState = action.horse;
  return Object.assign({}, state, newState);
};