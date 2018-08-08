import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ListOfRoutes } from './routerComponent';
import { map } from './routerMap';

import HorseProfileContainer from '../components/componentContainers/horseProfileContainer';
import HorseListContainer from '../components/componentContainers/horseListContainer';

export const getRoutes = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact={true}
        render={(props: any) => {
          return (
            <HorseListContainer />
          );
        }}
      />
      <Route
        path="/profile/:id"
        render={(props: any) => {
          return (
            <HorseProfileContainer
              idHorse={props.match.params.id}
            />
          );
        }}
      />
      {/* <ListOfRoutes
        mapComponent={map}
      /> */}
    </Switch>
  );
};