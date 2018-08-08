export const changeFiltersAction = (field: string, value: any) => (dispatch: Function) => {
  dispatch(changeFiltersObj(field, value));
};

/*---------------------Object Actions------------------------------------------*/

function changeFiltersObj(field: string, value: any): Object {
  return {type: 'CHANGE_FILTERS', ...{field, value}}
};