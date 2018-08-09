import * as React from 'react';
import { Link } from 'react-router-dom';

import { ParametrHorse } from './parametrHorse';

export class ProfileHorseInList extends React.Component<any, any> {

  handleClick = (e: any) => {
    e.preventDefault();
    if(typeof this.props.selectProfile === 'function') {
      this.props.selectProfile(this.props.horse.id);
    }

  }

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
        />
      );
    });

    return element;
  }

  render() {
    return (
      <div 
        className={this.props.profileHorseContainerClass}
        onClick={this.handleClick}
      >
        <div className='profile-list-container-top'>
          <div className='col-3'>
            <img
              className='profile-list-image'
              src={'/assets/images/default-Image.png'}
              width='100%'
            />
          </div>
          <div className='col-3 profile-description'>
            <div>
              <div className='row'>
                <h3 className='col-8'>{this.props.horse.name}</h3>
              </div>
              <p className='profile-description-text'>{this.props.horse.description}</p>
            </div>
          </div>
          <div className='col-6 profile-horse-params-block'>
            {this.renderParamsHorse()}
          </div>
        </div>
        {this.props.renderLinks ? (
          <div className='profile-list-link-container'>
            <div className='col-6 profile-list-link'>
              <Link to={`/profile/${this.props.horse.id}`} >View full profile</Link>
            </div>
            <div className='col-6 profile-list-link'>
              <Link to={`/findapair/${this.props.horse.id}`} >Find a pair</Link>
            </div>
          </div>
        ) :
          null
        }
      </div>
    );
  }
}