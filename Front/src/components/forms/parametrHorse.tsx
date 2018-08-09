import * as React from 'react';

export class ParametrHorse extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      isEdit: false,
      isHover: false,
    }
  }

  handleEditParams = () => {
    this.setState({
      isEdit: true,
    });
  }

  handleFocusParams = () => {
    this.setState({
      isEdit: false,
    });
  }

  handleMouseEnter = () => {
    this.setState({
      isHover: true,
    });
  }

  handleMouseLeave = () => {
    this.setState({
      isHover: false,
    });
  }

  onChangeParams = (e: any) => {
    this.props.changeParams(this.props.label.toLowerCase(), e.target.value);
  }

  render() {
    const element: any = {
      number: (<input
        className={`form-control profile-horse-params-input profile-horse-params-input-number ${this.props.classComponent}`}
        type="number"
        autoFocus
        onBlur={this.handleFocusParams}
        min={0}
        max={10}
        value={this.props.value}
        onChange={this.onChangeParams}
      />),
      text: (<input
        className={`col-5 form-control profile-horse-params-input ${this.props.classComponent}`}
        autoFocus
        onBlur={this.handleFocusParams}
        value={this.props.value}
        onChange={this.onChangeParams}
      />),
      select: (<select
        className={`col-7 form-control profile-horse-params-input ${this.props.classComponent}`}
        autoFocus
        onBlur={this.handleFocusParams}
        value={this.props.value}
        onChange={this.onChangeParams}
      >
        <option value="m">Male</option>
        <option value="w">Female</option>
      </select>),
    }

    if (this.props.edit) {
      return (
        <div
          className='col-6 profile-horse-params'
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
        >
          {this.state.isHover ?
            <i
              className="col-1 fas fa-pencil-alt element-edit"
              onClick={this.handleEditParams}
            ></i>
            :
            <div className='col-1 element-edit-div'></div>
          }
          <label
            className='col-7'
          >
            {this.props.label}
          </label>
          {
            this.state.isEdit ?
              element[this.props.type]
              :
              (
                <label
                  className='col-5 profile-params-overflow'
                >
                  {this.props.type === 'select' ?
                    <i className={`fas ${this.props.value === 'm' ?
                      'fa-mars'
                      :
                      this.props.value === 'w' && 'fa-venus'}`}></i>
                    :
                    this.props.value
                  }

                </label>
              )
          }
        </div >
      );
    } else {
      return (
        <div className={this.props.containerClass || 'col-6 profile-horse-params'}>
          <label
            className='col-7'
          >
            {this.props.label}
          </label>
          <label
            className='col-5 profile-params-overflow'
          >
            {this.props.type === 'select' ?
              <i className={`fas ${this.props.value === 'm' ?
                'fa-mars'
                :
                this.props.value === 'w' && 'fa-venus'}`}></i>
              :
              <div className='profile-params-text-overflow'>
                {this.props.value}
              </div>
            }
          </label>
        </div >
      );
    }

  }
}