import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { HorseList } from '../horseList';
import { getListHorseAction } from '../../actions/listHorseAction';

class HorseListContainer extends React.Component<any, any> {

  componentDidMount() {
    this.props.getListHorseAction();
  }

  render() {
    return this.props.listHorse.horses && this.props.listHorse.horses.length > 0 ?
      <HorseList
        listHorse={this.props.listHorse}
        listParametrsHorse={this.props.listParametrsHorse}
        changeParams={() => { }}
        renderLinks={this.props.renderLinks}
      />
      :
      null;
  }
}

const mapStateToProps = (state: any) => {
  return {
    listHorse: state.listHorse,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({
    getListHorseAction,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HorseListContainer);