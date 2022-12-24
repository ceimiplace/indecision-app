import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
class IndecisionApp extends React.Component {
  render() {
    let title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Item one", "item two", "Item four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </header>
    );
  }
}
class Action extends React.Component {
  handlePick() {
    alert("hi");
  }

  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What shoould i do?</button>
      </div>
    );
  }
}
class Options extends React.Component {
  constructor(props) {
    super(props);
    this.removeAll = this.removeAll.bind(this);
  }
  removeAll() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAll}>Remove all</button>
        {this.props.options.map((elem) => (
          <Option key={elem} optionText={elem} />
        ))}
      </div>
    );
  }
}
class Option extends React.Component {
  render() {
    return <p>{this.props.optionText}</p>;
  }
}
class AddOption extends React.Component {
  handleFormSubmit(e) {
    e.preventDefault();
    if (e.target.elements.option.value.trim()) {
      alert("well done");
    }
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Submit option</button>
      </form>
    );
  }
}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = { counter: 0 };
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
class Visiblity extends React.Component {
  constructor(props) {
    super(props);
    this.toggleVisibility = this.toggleVisibility.bind(this);
    this.state = { visibility: true };
  }
  toggleVisibility() {
    this.setState((prev) => {
      return { visibility: !prev.visibility };
    });
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
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<Visiblity />);
