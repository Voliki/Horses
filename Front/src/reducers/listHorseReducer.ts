import { listParametrsHorse } from '../DTO/listParametrHorse';

const initialState: any = {
  horses: [],
  listParametrsHorse: [...listParametrsHorse],
};

export function listHorseReducer(state = initialState, action: any) {
  let stateObject: any = {
    'GET_LIST_HORSE': getListHorse(state, action)
  };

  return stateObject.hasOwnProperty(action.type) ? stateObject[action.type] : state;
};

function getListHorse(state: any, action: any) {
  let newState = state;
  newState.horses = action.listHorse;
  return Object.assign({}, state, newState);
};