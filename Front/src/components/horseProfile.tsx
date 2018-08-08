import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';

import { ParametrHorse } from './forms/parametrHorse';
import { NameComponentForm } from './forms/nameComponentForm';
import { DescriptionComponentForm } from './forms/descriptionComponentForm';

interface HorseProfileProps {
  paramsHorse: Array<string>;

}

export class HorseProfile extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  renderImage = () => {
    const images: Array<any> = this.props.profile.galleryImageUrl.map((item: string) => {
      return (
        <div key={uuidV4()} className='profile-image-gallery'>
          <img
            src={item || '../assets/images/default-Image.png'}
            width='100%'
          />
        </div>
      );
    });

    return images;
  }

  renderParamsComponent = () => {
    const element: Array<any> = this.props.paramsHorse.map((item: string, index: number) => {
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
          value={this.props.profile.paramsHorse[item.toLowerCase()]}
          edit={true}
          changeParams={this.props.changeParamsHorseAction}
        />
      )
    });

    return element;
  }

  render() {
    return (
      <div className='profile-block'>
        <div className='col-11 profile'>
          <div className='profile-save-button-container'>
            <button className='btn cursor-pointer'>Save profile</button>
          </div>
          <div className='row profile-top-block'>
            <div>
              <img
                className='profile-image'
                src={this.props.profile.avatarUrl || '../assets/images/default-Image.png'}
              />
              <button className='btn profile-change-photo'>change photo</button>
            </div>
            <div className='profile-description col-4'>
              <NameComponentForm
                name={this.props.profile.name}
                changeProfileHorseAction={this.props.changeProfileHorseAction}
              />
              <DescriptionComponentForm
                id='description'
                title='Description'
                description={this.props.profile.description}
                titleClass='col-5'
                descriptionClass='profile-description-text'
                textareaClass='profile-textarea-max-height'
                changeProfileHorseAction={this.props.changeProfileHorseAction}
              />
            </div>
            <div className='col-5 profile-horse-params-block'>
              {this.renderParamsComponent()}
            </div>
          </div>
          <div className='row profile-bottom-block'>
            <div className='col-4'>
              <DescriptionComponentForm
                id='ownerContacts'
                title='Owner Contacts'
                description={this.props.profile.ownerContacts}
                titleClass='col-8'
                descriptionClass='profile-owner-contacts-text'
                changeProfileHorseAction={this.props.changeProfileHorseAction}
              />
            </div>
            <div className='col-4'>
              <DescriptionComponentForm
                id='pedigree'
                title='Pedigree'
                description={this.props.profile.pedigree}
                titleClass='col-5'
                descriptionClass='profile-pedigree-text'
                changeProfileHorseAction={this.props.changeProfileHorseAction}
              />
            </div>
            <div className='col-4'>
              <h3>Gallery</h3>
              <div className='col-12 profile-gallery'>
                {this.renderImage()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}