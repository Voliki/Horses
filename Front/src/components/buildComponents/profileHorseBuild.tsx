import * as React from 'react';

import Header from '../header';
import HorseProfileContainer from '../componentContainers/horseProfileContainer';

export function HorseProfileBuild(props: any) {
  return(
    <div>
      <Header />
      <HorseProfileContainer 
        idHorse={props.idHorse}
      />
    </div>
  );
}