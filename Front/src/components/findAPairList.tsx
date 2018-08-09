import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';
import { Link } from 'react-router-dom';

import { ProfileHorseInList } from './forms/listHorse';

export class FindAPairList extends React.Component<any, any> {

  renderProfileHorses = () => {
    const element = this.props.listHorse.horses.map((item: any, index: number) => {
      return (
        <ProfileHorseInList
          key={uuidV4()}
          horse={this.props.listHorse.horses[index]}
          listParametrsHorse={this.props.listHorse.listParametrsHorse}
          renderLinks={this.props.renderLinks}
          profileHorseContainerClass={'faind-profile-list-container'}
          selectProfile={this.props.handleRedirect}
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