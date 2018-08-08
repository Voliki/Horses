import { getListHorse } from '../services/listService';

export const getListHorseAction = () => (dispatch: Function) =>{
  getListHorse()
    .then((listHorse: any) => {
      dispatch(getListHorseObj(listHorse));
    })
    .catch((error: any) => {
      console.log(error);
    });
};

function getListHorseObj(listHorse: Array<any>): Object {
  return {type: 'GET_LIST_HORSE', listHorse};
};