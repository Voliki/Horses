import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ResultOfCrossingHorses } from '../forms/resultOfCrossingHorses';

import { getHorseParametrsAction } from '../../actions/resultOfCrossingHorsesAction';

class ResultOfCrossingHorsesContainer extends React.Component<any, any> {

  id: number = null;

  componentDidMount() {
    if (!isNaN(Number(this.props.idHorse))) {
      this.id = Number(this.props.idHorse);
      this.props.getHorseParametrsAction(Number(this.props.idHorse));
    }
  }

  componentWillReceiveProps(nextProps: any) {
    if (this.id !== Number(nextProps.idHorse) && !isNaN(Number(nextProps.idHorse))) {
      this.id = Number(nextProps.idHorse);
      this.props.getHorseParametrsAction(Number(nextProps.idHorse));
    }
  }

  render() {
    return this.props.isProfileLoaded ?
      <div>
        <ResultOfCrossingHorses
          horse={this.props.horse}
          listParametrsHorse={this.props.listParametrsHorse}
          isRenderList={this.props.idHorse !== undefined ? true : false}
          isProfileLoaded={this.props.isProfileLoaded}
          firstHorse={this.props.firstHorse}
        />
      </div>
      :
      null;
  }
}

const mapStateToProps = (state: any) => {
  return {
    horse: state.resultOfCrossing.horse,
    listParametrsHorse: state.resultOfCrossing.listParametrsHorse,
    isProfileLoaded: state.resultOfCrossing.isProfileLoaded,
    firstHorse: state.profile.paramsHorse,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({
    getHorseParametrsAction,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResultOfCrossingHorsesContainer);