import { get } from './httpService';

import { profile } from '../../mock/profileMock';

export const getProfile = (id: number) => {
  return new Promise((resolve, reject) => {
    resolve(profile);
  });
};