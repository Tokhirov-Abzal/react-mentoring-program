import React, { Component } from "react";
import { Buttons } from ".";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  onClickPlus = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };

  onClickMinus = () => {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  };
  render() {
    return (
      <div>
        <div className="counter__containergi">
          <h1>Counter: {this.state.count}</h1>
          {React.createElement(
            "div",
            { className: "btn__container" },
            <Buttons onClickHandler={this.onClickPlus} type="+" />,
            <Buttons onClickHandler={this.onClickMinus} type="-" />
          )}
        </div>
      </div>
    );
  }
}

export default Counter;
