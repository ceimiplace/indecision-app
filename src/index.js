import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import OptionalModal from "./OptionalModal";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
import IndecisionApp from "./App";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<IndecisionApp />);
///////////////////////////
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = { counter: 0 };
  }
  componentDidMount() {
    this.setState(() => {
      return { counter: +localStorage.getItem("counter") };
    });
  }
  componentDidUpdate() {
    localStorage.setItem("counter", this.state.counter);
  }
  addOne() {
    this.setState((previous) => {
      return { counter: previous.counter + 1 };
    });
  }
  removeOne() {
    this.setState((previousState) => {
      return { counter: previousState.counter - 1 };
    });
  }
  resetCounter() {
    this.setState(() => {
      return { counter: 0 };
    });
  }
  render() {
    return (
      <div>
        <h1>Counter {this.state.counter}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.removeOne}>-1</button>
        <button onClick={this.resetCounter}>reset</button>
      </div>
    );
  }
}

/////////////////////////////
class Visiblity extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = { visibility: true };
  }
  toggleVisibility() {
    this.setState((prev) => ({
      visibility: !prev.visibility,
    }));
  }
  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? "Show details" : "Hide details"}
        </button>
        {this.state.visibility ? <p>Here are some details</p> : null}
      </div>
    );
  }
}
