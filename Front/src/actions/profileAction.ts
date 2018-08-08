import { getProfile } from '../services/profileService';

export const changeParamsHorseAction = (field: string, value: any) => (dispatch: Function) => {
  dispatch(changeParamsHorseObj(field, value));
};

export const getHorseProfileAction = (id: number) => (dispatch: Function) => {
  getProfile(id)
    .then( (horse: any) => {
      dispatch(getHorseObj(horse));
    })
    .catch( (error: any) => {
      console.log("error", error);
    });
};

export const changeProfileHorseAction = (field: string, value: any) => (dispatch: Function) => {
  dispatch(changeProfileHorseObj(field, value));
};

/*---------------------Object Actions------------------------------------------*/

function changeParamsHorseObj(field: string, value: any): Object {
  return {type: 'CHANGE_PARAMS_HORSE', ...{field, value} };
};

function getHorseObj(horse: any): Object {
  return {type: 'GET_HORSE_PROFILE', horse };
};

function changeProfileHorseObj(field: string, value: any): Object {
  return {type: 'CHANGE_PROFILE_HORSE', ...{field, value} };
};