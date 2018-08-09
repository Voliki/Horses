import { get } from './httpService';

import { profile } from '../../mock/profileMock';

export const getListHorse = () => {
  return new Promise((resolve, reject) => {
    resolve(profile);
  });
};