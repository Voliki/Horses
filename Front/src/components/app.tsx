import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';

import Header from './header';
import HorseProfileContainer from './componentContainers/horseProdileContainer';

export class App extends React.Component<any, any> {
  constructor(props: any){
    super(props);
  }

  render(){
    return(
      <div className=''>
        <Header />
        <div>
          <HorseProfileContainer />
        </div>
      </div>
    );
  }
}