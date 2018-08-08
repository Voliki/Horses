import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../header';
import { HorseList } from '../horseList';
import HorseFiltersContainer from './horseFiltersContainer';
import { getListHorseAction } from '../../actions/listHorseAction';

class HorseListContainer extends React.Component<any, any> {

  componentDidMount() {
    this.props.getListHorseAction();
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          <HorseFiltersContainer />
        </div>
        {this.props.listHorse.horses && this.props.listHorse.horses.length > 0 ?
          <div>
            <HorseList
              listHorse={this.props.listHorse}
              listParametrsHorse={this.props.listParametrsHorse}
              changeParams={() => { }}
            />
          </div>
          :
          null
        }
      </div>
    );
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