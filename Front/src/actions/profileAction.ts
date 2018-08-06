import { getProfile } from '../services/profileService';

export const changeParamsHorseAction = (faield: string, value: any) => (dispatch: Function) => {
  dispatch(changeParamsHorseObj(faield, value));
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

function changeParamsHorseObj(faield: string, value: any): Object {
  return {type: 'CHANGE_PARAMS_HORSE', ...{faield, value} };
};

function getHorseObj(horse: any): Object {
  return {type: 'GET_HORSE_PROFILE', horse };
};