import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import App from "./App";
import OptionalModal from "./OptionalModal";
import Header from "./Header";
import Action from "./Action";
import Options from "./Options";
import AddOption from "./AddOption";
class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ["Item one", "item two", "Thiord option", "Item four"],
      selectedOption: false,
    };
    this.removeAllOptions = this.removeAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.addOption = this.addOption.bind(this);
    this.removeOption = this.removeOption.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    this.setState(() => ({ selectedOption: undefined }));
  }
  componentDidMount() {
    let options = JSON.parse(localStorage.getItem("options"));
    if (options) {
      this.setState(() => {
        return { options };
      });
    }
  }
  componentDidUpdate() {
    console.log("updated");
    localStorage.setItem("options", JSON.stringify(this.state.options));
  }
  componentWillUnmount() {}
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

    this.setState((previous) => {
      return { selectedOption: previous.options[random] };
    });
  }
  render() {
    let title = "Indecision App";
    const subtitle = "Put your life in the hands of a computer";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
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
          <OptionalModal
            isOpen={!!this.state.selectedOption}
            closeModal={this.closeModal}
          />
        </div>
      </div>
    );
  }
}
export default IndecisionApp;
