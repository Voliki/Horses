import AppContainer from '../components/componentContainers/appContainer';
import HorseListContainer from '../components/componentContainers/horseListContainer';

export const map: object = {
  profile: {
    component: AppContainer,
    exact: true,
    route: '/profile/:id'
  },
  horseList: {
    component: HorseListContainer,
    exact: false,
    route: '/horselist'
  }
};