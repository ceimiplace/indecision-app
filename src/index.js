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
  removeAll() {
    alert("hello");
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

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<IndecisionApp />);
