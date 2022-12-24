import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Item one", "item two", "Thiord option", "Item four"],
    };
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
  }
  removeOption(option) {
    this.setState((prevState) => {
      return { options: prevState.options.filter((elem) => elem !== option) };
    });
  }
  addOption(option) {
    if (!option) {
      return "Please enter a valid option";
    } else if (this.state.options.indexOf(option) > -1) {
      return "Please enter something new ";
    }
    this.setState((prev) => ({
      options: prev.options.concat(option),
    }));
  }
  removeAllOptions() {
    this.setState(() => ({
      options: [],
    }));
  }
  handlePick() {
    let random = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[random]);
  }
  render() {
    let title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          disabled={this.state.options.length <= 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          removeAllOptions={this.removeAllOptions}
          removeOption={this.removeOption}
        />
        <AddOption addOption={this.addOption} />
      </div>
    );
  }
}
const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </header>
  );
};
Header.defaultProps = { title: "Indecision" };
const Action = (props) => {
  return (
    <div>
      <button disabled={props.disabled} onClick={props.handlePick}>
        What shoould i do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.removeAllOptions}>Remove all</button>
      {props.options.map((elem) => (
        <Option
          key={elem}
          optionText={elem}
          removeOption={props.removeOption}
        />
      ))}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button onClick={() => props.removeOption(props.optionText)}>
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.state = { error: null };
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let value = e.target.elements.option.value.trim();

    let errorMessage = this.props.addOption(value);
    if (errorMessage) {
      this.setState(() => ({
        error: errorMessage,
      }));
    } else {
      this.setState(() => ({ error: null }));
    }
    e.target.elements.option.value = "";
  }
  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        {this.state.error && <p>{this.state.error}</p>}
        <input type="text" name="option" />
        <button type="submit">Submit option</button>
      </form>
    );
  }
}

///////////////////////////
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
    this.state = { counter: props.counter };
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
Counter.defaultProps = { counter: 0 };
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
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<IndecisionApp />);
