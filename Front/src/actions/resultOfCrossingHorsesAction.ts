import { getProfile } from '../services/profileService';

export const getHorseParametrsAction = (idHorse: number) => (dispatch: Function) => {
  getProfile(idHorse)
    .then((horse: any) => {
      dispatch(getHorseParametrsObj(horse));
    })
    .catch((error: any) => {
      console.log(error);
    });
};

function getHorseParametrsObj(horse: any): Object {
  return {type:'GET_HORSE_PARAMETR', horse};
};