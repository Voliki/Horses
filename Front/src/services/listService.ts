import { get } from './httpService';

import { listHorse } from '../../mock/listHorse';

export const getListHorse = () => {
  return new Promise((resolve, reject) => {
    resolve(listHorse);
  });
};