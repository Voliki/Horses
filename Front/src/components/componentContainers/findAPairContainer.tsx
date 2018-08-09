import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FindAPair } from '../forms/findAPair';

import { getListHorseAction } from '../../actions/listHorseAction';
import {
  getHorseProfileAction,
} from '../../actions/profileAction';

class FindAPairContainer extends React.Component<any, any>{

  componentDidMount() {
    this.props.getListHorseAction();
    this.props.getHorseProfileAction(Number(this.props.idHorse));
  }

  render() {
    return this.props.listHorse.horses && this.props.listHorse.horses.length > 0  ?
      <div>
        <FindAPair
          horse={this.props.profile}
          listParametrsHorse={this.props.listHorse.listParametrsHorse}
        />
      </div>
      :
      null;
  }
}

const mapStateToProps = (state: any) => {
  return {
    listHorse: state.listHorse,
    profile: state.profile,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({
    getListHorseAction,
    getHorseProfileAction,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FindAPairContainer);