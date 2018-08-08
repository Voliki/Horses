import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HorseProfile } from '../horseProfile';
import Header from '../header';
import {
  changeParamsHorseAction,
  getHorseProfileAction,
  changeProfileHorseAction,
} from '../../actions/profileAction';

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

  componentDidMount(){
    this.props.getHorseProfileAction(Number(this.props.idHorse));
  }

  render() {
    return (
      <div>
        <Header />
        <HorseProfile
          paramsHorse={mockParams}
          profile={this.props.profile}
          changeParamsHorseAction={this.props.changeParamsHorseAction}
          changeProfileHorseAction={this.props.changeProfileHorseAction}
        />
      </div>
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
    changeProfileHorseAction,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HorseProfileContainer);