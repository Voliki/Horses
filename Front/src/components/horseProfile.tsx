import * as React from 'react';
import { v4 as uuidV4 } from 'uuid';

interface HorseProfileProps {
  paramsHorse: Array<string>;
}

export class HorseProfile extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      ...this.initialState(props.paramsHorse),
      hover: '',
    };
  }

  componentDidMount() {
    this.props.getHorseProfileAction(1);
  }

  initialState = (fields: Array<string>) => {
    let state: any = {};
    for (const index in fields) {
      state[`is${fields[index]}`] = false;
    }

    return state;
  }

  handleEditParams = (e: any) => {
    this.setState({
      [e.target.id]: true,
    });
  }

  handleFocusParams = (e: any) => {
    this.setState({
      [e.target.id]: false,
    });
  }

  someHandler = (e: any) => {
    console.log(e.target.id);
  }

  someOtherHandler = (e: any) => {
    console.log(e.target.id);
  }

  onChangeParams = (e: any) => {
    const field = e.target.id.replace('is', '').toLowerCase();
    const value = isNaN(Number(e.target.value)) ? e.target.value : Number(e.target.value);
    this.props.changeParamsHorseAction(field, value);
  }

  renderImage = () => {
    const images: Array<any> = this.props.profile.galleryImageUrl.map((item: string) => {
      return (
        <div key={uuidV4()} className='profile-image-gallery'>
          <img
            src={item || '../assets/image/default-Image.png'}
            width='100%'
          />
        </div>
      );
    });

    return images;
  }

  renderParamsComponent = () => {
    const element = this.props.paramsHorse.map((item: string, index: number) => {
      let element = null;
      if (item === 'Id') {
        element = <input
          id={`is${item}`}
          className='col-7 form-control profile-horse-params-input'
          autoFocus
          onBlur={this.handleFocusParams}
          value={this.props.profile[item.toLowerCase()]}
          onChange={this.onChangeParams}
        />
      } else if (item === 'Sex') {
        element = <select
          id={`is${item}`}
          className='col-7 form-control profile-horse-params-input'
          autoFocus
          onBlur={this.handleFocusParams}
          value={this.props.profile[item.toLowerCase()]}
          onChange={this.onChangeParams}
        >
          <option value="m">Male</option>
          <option value="w">Female</option>
        </select>
      } else {
        element = <input
          id={`is${item}`}
          className='col-5 form-control profile-horse-params-input'
          type="number"
          autoFocus
          onBlur={this.handleFocusParams}
          min={0}
          max={10}
          value={this.props.profile[item.toLowerCase()]}
          onChange={this.onChangeParams}
        />
      }

      return (
        <div key={uuidV4()} className=' col-6 profile-horse-params' >
          <label 
            id={`is${item}`} 
            className='col-7 element-edit' 
            onClick={this.handleEditParams}
            onMouseEnter={this.someHandler}
            onMouseLeave={this.someOtherHandler}
          >
            {item}  
          </label>
          {
            this.state[`is${item}`] ?
              element
              :
              (
                <label
                  className='col-5'
                >
                  {item === 'Sex' ?
                    <i className={`fas ${item === 'Sex' &&
                      this.props.profile[item.toLowerCase()] === 'm' ?
                      'fa-mars'
                      :
                      this.props.profile[item.toLowerCase()] === 'w' && 'fa-venus'}`}></i>
                    :
                    this.props.profile[item.toLowerCase()]}
                </label>
              )
          }
        </div >
      );
    });

    return element;
  }

  render() {
    return (
      <div className='profile-block'>
        <div className='col-11 profile'>
          <div className='row profile-top-block'>
            <div>
              <img
                className='profile-image'
                src={this.props.profile.avatarUrl || '../assets/image/default-Image.png'}
              />
            </div>
            <div className='profile-description col-4'>
              <h2>{this.props.profile.name}</h2>
              <p className='profile-description-text'>
                {this.props.profile.description}
              </p>
            </div>
            <div className='col-5 profile-horse-params-block'>
              {this.renderParamsComponent()}
            </div>
          </div>
          <div className='row profile-bottom-block'>
            <div className='col-4'>
              <h3>Owner Contacts</h3>
              <p className='profile-owner-contacts-text'>{this.props.profile.ownerContacts}</p>
            </div>
            <div className='col-4'>
              <h3>Pedigree</h3>
              <p className='profile-pedigree-text'>{this.props.profile.pedigree}</p>
            </div>
            <div className='col-4'>
              <h3>Gallery</h3>
              <div className='col-12 profile-gallery'>
                {this.renderImage()}
                {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}