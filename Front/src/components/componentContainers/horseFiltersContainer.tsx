import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HorseFilters from '../horseFilters';
import { changeFiltersAction } from '../../actions/filtersAction';

class HorseFiltersContainer extends React.Component<any, any> {

  render() {
    return (
      <div>
        <HorseFilters 
          filters={this.props.filters}
          changeFiltersAction={this.props.changeFiltersAction}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({
    changeFiltersAction,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HorseFiltersContainer);