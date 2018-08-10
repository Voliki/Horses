import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FindAPairList } from '../findAPairList';

class FindAPairListContainer extends React.Component<any, any>{
  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <div>
        <FindAPairList 
          listHorse={this.props.listHorse}
          listParametrsHorse={this.props.listParametrsHorse}
          renderLinks={false}
          idTwoHorse={this.props.idTwoHorse}
          idOneHorse={this.props.idOneHorse}
        />
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
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FindAPairListContainer);