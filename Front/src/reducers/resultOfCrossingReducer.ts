import { listParametrsHorse } from '../DTO/listParametrHorse';

const initialState: any = {
  horse: {
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
  },
  listParametrsHorse: [...listParametrsHorse],
  isProfileLoaded: false,
};

export function resultOfCrossingReducer(state = initialState, action: any) {
  let stateObject: any = {
    'GET_HORSE_PARAMETR': () => getListHorse(state, action),
  };

  return stateObject.hasOwnProperty(action.type) ? stateObject[action.type]() : state;
};

function getListHorse(state: any, action: any) {
  let newState = state;
  newState.horse = action.horse;
  newState.isProfileLoaded = true;
  return Object.assign({}, state, newState);
};