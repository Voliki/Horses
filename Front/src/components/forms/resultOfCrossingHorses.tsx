import * as React from 'react';

import { ParametrHorse } from '../forms/parametrHorse';
import { isNull } from 'util';

export class ResultOfCrossingHorses extends React.Component<any, any>{

  renderParamsHorse = (): any => {
    const element = this.props.listParametrsHorse.map((item: any, index: number) => {
      const params: any = this.props.horse && this.props.horse.paramsHorse[item.toLowerCase()];
      const average: any = Math.round((this.props.firstHorse[item.toLowerCase()] + params) / 2);
      return (
        <ParametrHorse
          key={index}
          label={item}
          type={''}
          value={average}
          edit={false}
          containerClass='col-12 profile-horse-params'
        />
      );
    });

    return element;
  }

  render() {
    
    return (
      <div>
        <div className='col-12'>
          <h4>Results</h4>
        </div>
        <div>
          {this.props.isProfileLoaded ? this.props.isRenderList && this.renderParamsHorse() : null}
        </div>
      </div>
    );
  }
}