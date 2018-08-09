import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { FindAPairList } from '../findAPairList';

class FindAPairListContainer extends React.Component<any, any>{
  constructor(props: any){
    super(props);
    this.state = {
      redirect: false,
      id:0,
    }
  }

  handleRedirect = (id: number) => {
    this.setState({
      redirect: true,
      id,
    });
    console.log("state")
  }

  render() {
    return (
      <div>
        <FindAPairList 
          listHorse={this.props.listHorse}
          listParametrsHorse={this.props.listParametrsHorse}
          renderLinks={false}
          handleRedirect={this.handleRedirect}
        />
        {this.state.redirect ? (
          <Redirect to={`/findapair/${this.props.idOneHorse}/${this.state.id}`}/>
        ): 
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
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(FindAPairListContainer);