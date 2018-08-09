const initialState: any = {
  age: [0, 10],
  type: [0, 10],
  skulder: [0, 10],
  forlemmer: [0, 10],
  skridt: [0, 10],
  galop: [0, 10],
  hoved: [0, 10],
  overlinie: [0, 10],
  baglemmer: [0, 10],
  trav: [0, 10],
  breeding: [0, 10],
  name: '',
  sex: '',
  color: '',
  id: '',
};

export function filtersReducer(state = initialState, action: any) {
  let stateObject: any = {
    'CHANGE_FILTERS': () => changeFilterSlider(state, action)
  };

  return stateObject.hasOwnProperty(action.type) ? stateObject[action.type]() : state;
};

function changeFilterSlider(state: any, action: any) {
  let newState = state;
  newState[action.field] = action.value;
  return Object.assign({}, state, newState);
};