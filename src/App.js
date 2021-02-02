import React, { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {

  
  render(){
    console.log(this.props)
    return (
      <div className="App">
        <button onClick={this.props.increase}> + </button>
        <div>{this.props.count}</div>
        <button onClick={this.props.decrease}> - </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count : state.count
  }
}

const action1 = {
  type: 'INCREASE'
}
const action2 = {
  type: 'DECREASE'
}
function mapDispatchToProps (dispatch) {
  return {
    increase : () => dispatch(action1),
    decrease : () => dispatch(action2)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


// connect :: lié l component par le data dans reducer   /// lié redux avec notre component App
// mapStateToProps :  donne moi le state du store et envoie le comme props pour le component App
//mapDispatchToProps => envoi les parametre increase et decrease comme props