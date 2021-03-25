import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  state = {
    count: 0,
  };

  changeCount = (count) => {
    this.setState((prevState) => ({ count: prevState.count + count }));
  };

  render() {
    return (
      <div>
        <div className="counter-wrapper">
          <button onClick={() => this.changeCount(1)}>+</button>
          <div>{this.state.count}</div>
          <button onClick={() => this.changeCount(-1)}>-</button>
        </div>
        {typeof this.props.callback === "function" && <button onClick={() => this.props.callback(this.state.count)}>Save</button>}
      </div>
    );
  }
}

export default Counter;
