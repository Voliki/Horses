import * as React from 'react';

export class DescriptionComponentForm extends React.Component<any, any>{
  constructor(props: any) {
    super(props);

    this.state = {
      isVisiblePen: false,
      isEdit: false,
    };
  }

  handleEditParams = (e: any) => {
    this.setState({
      isEdit: true,
    });
  }

  handleFocusParams = (e: any) => {
    this.setState({
      isEdit: false,
    });
  }

  handleMouseEnter = () => {
    this.setState({
      isVisiblePen: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isVisiblePen: false,
    });
  }

  onChangeParams = (e: any) => {
    this.props.changeProfileHorseAction(this.props.id, e.target.value);
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div
          className='row'

        >
          <h4 className={this.props.titleClass}>{this.props.title}</h4>
          {this.state.isVisiblePen ? (
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
        </div>
        { this.state.isEdit ?(
          <textarea
            className={`form-control ${this.props.textareaClass}`}
            autoFocus
            defaultValue={this.props.description}
            onBlur={this.handleFocusParams}
            rows={10}
            onChange={this.onChangeParams}
          />
        ):(
        <p className={this.props.descriptionClass}>
          {this.props.description}
        </p>
        )
      }
      </div>
    );
  }
}