import * as React from 'react';

export class NameComponentForm extends React.Component<any, any>{
  constructor(props: any) {
    super(props);

    this.state = {
      isVisiblePenName: false,
      isEditName: false,
    };
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

  handleMouseEnter = () => {
    this.setState({
      isVisiblePenName: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isVisiblePenName: false,
    });
  }

  onChangeParams = (e: any) => {
    this.props.changeProfileHorseAction('name', e.target.value);
  }

  render() {
    const input =
      <input
        id='isEditName'
        className='col-5 form-control'
        value={this.props.name}
        onChange={this.onChangeParams}
        autoFocus
        onBlur={this.handleFocusParams}
      />;
    const label = <h2 className='col-8'>{this.props.name}</h2>;

    const element = this.state.isEditName ? input : label
    return (
      <div
        className='row'
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.isVisiblePenName ? (
          <i
            id='isEditName'
            className="fas fa-pencil-alt element-edit"
            onClick={this.handleEditParams}
          ></i>
        ) : (
            <div className='element-edit-div'>
            </div>
          )
        }
        {element}
      </div>
    );
  }
}