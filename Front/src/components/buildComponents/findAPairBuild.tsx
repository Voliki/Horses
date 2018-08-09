import * as React from 'react';

import Header from '../header';
import HorseFiltersContainer from '../componentContainers/horseFiltersContainer';
import FindAPairListContainer from '../componentContainers/findAPairListContainer';
import FindAPairContainer from '../componentContainers/findAPairContainer';
import ResultOfCrossingHorsesContainer from '../componentContainers/resultOfCrossingHorsesContainer';

export function FindAPairBuild(props: any): any {
  console.log("props", props)
  return (
    <div>
      <Header />
      <HorseFiltersContainer />
      <div className='find-a-pair-build-container'>
        <div className='find-a-pair-build-container-width-100'>
          <FindAPairContainer 
            idHorse={props.match.params.idOne}
          />
        </div>
        <div className='list-horse-build-list-container'>
          <FindAPairListContainer 
            urlPath={props.match.url}
            idOneHorse={props.match.params.idOne}
          />
        </div>
        <div className='find-a-pair-build-container-width-100-result'>
          <ResultOfCrossingHorsesContainer 
            idHorse={props.match.params.idTwo}
          />
        </div>
      </div>
    </div>
  );
}