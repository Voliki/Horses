import * as React from 'react';

import { ParametrHorse } from '../forms/parametrHorse';

export class ResultOfCrossingHorses extends React.Component<any, any>{

  renderParamsHorse = (): any => {
    const element = this.props.listParametrsHorse.map((item: any, index: number) => {
      return (
        <ParametrHorse
          key={index}
          label={item}
          type={''}
          value={this.props.horse.paramsHorse[item.toLowerCase()]}
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
          {this.props.isRenderList && this.renderParamsHorse()}
        </div>
      </div>
    );
  }
}