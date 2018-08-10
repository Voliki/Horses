import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';

import { ProfileHorseInList } from './forms/listHorse';

export class FindAPairList extends React.Component<any, any> {

  renderProfileHorses = () => {
    const element = this.props.listHorse.horses.map((item: any, index: number) => {
      return (
        <ProfileHorseInList
          key={uuidV4()}
          horse={item}
          listParametrsHorse={this.props.listHorse.listParametrsHorse}
          renderLinks={this.props.renderLinks}
          profileHorseContainerClass={`faind-profile-list-container ${item.id === Number(this.props.idTwoHorse)? 'faind-profile-list-container-selected' : ''}`}
          urlLink={true}
          idOneHorse={this.props.idOneHorse}
        />
      );
    });

    return element;
  }

  render() {
    return (
      <div className='faind-list-container'>
        {this.renderProfileHorses()}
      </div>
    );
  }
}