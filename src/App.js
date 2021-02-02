import React, { Component } from 'react';
import { connect } from 'react-redux';
class App extends Component {

  increase = () => {
    this.setState({
      count: this.props + 1
    })
  }
  decrease = () => {
    this.setState({
      count: this.props - 1
    })
  }
  render(){
    console.log(this.props)
    return (
      <div className="App">
        <button onClick={this.increase}> + </button>
        <div>{this.props.count}</div>
        <button onClick={this.decrease}> - </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count : state.count
  }
}
export default connect(mapStateToProps)(App);
