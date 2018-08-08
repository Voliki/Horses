import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';

import { ProfileHorseInList } from './forms/listHorse';

export class HorseList extends React.Component<any, any> {

  renderProfileHorses = () => {
    const element = this.props.listHorse.horses.map((item: any, index: number) => {
      return (
        <ProfileHorseInList
          key={uuidV4()}
          horse={this.props.listHorse.horses[index]}
          listParametrsHorse={this.props.listHorse.listParametrsHorse}
        />
      );
    });

    return element;
  }

  render() {
    return (
      <div className='list-container'>
        {this.renderProfileHorses()}
        {/* <ProfileHorseInList 
          listHorse={this.props.listHorse}
          changeParams={this.props.changeParams}
        /> */}
      </div>
    );
  }
}