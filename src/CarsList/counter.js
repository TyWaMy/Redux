import React, { Component } from "react";
import { connect } from "react-redux";
import { add, sub } from "../Redux/Action/action";

class Counter extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.counter}</h1>
        <button onClick={this.props.onAdd}>Плюсануть</button>
        <button onClick={this.props.onSub}>Отнять</button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    counter: state.counter.counter,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
