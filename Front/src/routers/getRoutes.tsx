import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import { ListOfRoutes } from './routerComponent';
import { map } from './routerMap';

import { ListHorseBuild } from '../components/buildComponents/listHorseBuild';
import { HorseProfileBuild } from '../components/buildComponents/profileHorseBuild';
import { FindAPairBuild } from '../components/buildComponents/findAPairBuild';

export const getRoutes = () => {
  return (
      <Switch>
        <Route
          path="/"
          exact={true}
          render={(props: any) => {
            return (
              
              <ListHorseBuild />
            );
          }}
        />
        <Route
          path="/profile/:id"
          render={(props: any) => {
            return (
              <HorseProfileBuild
                idHorse={props.match.params.id}
              />
            );
          }}
        />
        <Route
          path="/findapair/:idOne/:idTwo?"
          exact={true}
          render={(props: any) => {
            return (
              <FindAPairBuild
                match={props.match}
              />
            );
          }}
        />
        {/* <Route
          path="/findapair/:idOne/:idTwo"
          render={(props: any) => {
            return (
              <FindAPairBuild
                idOneHorse={props.match.params.idOne}
                idTwoHorse={props.match.params.idTwo}
              />
            );
          }}
        /> */}
        {/* <ListOfRoutes
        mapComponent={map}
      /> */}
      </Switch>
  );
};