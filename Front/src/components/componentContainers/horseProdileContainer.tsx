import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HorseProfile } from '../horseProfile';
import { changeParamsHorseAction, getHorseProfileAction } from '../../actions/profileAction';

const mockParams = [
  'Age',
  'Sex',
  'Id',
  'Type',
  'Hoved',
  'Skulder',
  'Overlinie',
  'Forlemmer',
  'Baglemmer',
  'Skridt',
  'Trav',
  'Galop'
];
class HorseProfileContainer extends React.Component<any, any> {
  render() {
    return (
      <HorseProfile
        paramsHorse={mockParams}
        profile={this.props.profile}
        changeParamsHorseAction={this.props.changeParamsHorseAction}
        getHorseProfileAction={this.props.getHorseProfileAction}
      />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({
    changeParamsHorseAction,
    getHorseProfileAction,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HorseProfileContainer);