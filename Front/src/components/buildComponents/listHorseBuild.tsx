import * as React from 'react';

import Header from '../header';
import HorseFiltersContainer from '../componentContainers/horseFiltersContainer';
import HorseListContainer from '../componentContainers/horseListContainer';

export function ListHorseBuild() {
  return(
    <div>
      <Header />
      <HorseFiltersContainer />
      <div className='list-horse-build-list-container'>
        <HorseListContainer 
          renderLinks={true}
        />
      </div>
    </div>
  );
}