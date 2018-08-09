import * as React from 'react';

import { ParametrHorse } from '../forms/parametrHorse';

export class FindAPair extends React.Component<any, any> {

  renderParamsHorse = (): any => {
    const element = this.props.listParametrsHorse.map((item: any, index: number) => {
      let type = 'number';
      if (item === 'Sex') {
        type = 'select';
      } else if (item === 'Id') {
        type = 'text';
      }
      return (
        <ParametrHorse
          key={index}
          label={item}
          type={type}
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
          <h4>{this.props.horse.name}</h4>
        </div>
        <div className='col-12'>
          <img
            className='profile-list-image'
            src={'/assets/images/default-Image.png'}
            width='100%'
          />
        </div>
        <div>
          {this.renderParamsHorse()}
        </div>
      </div>
    );
  }
}