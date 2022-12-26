import React from "react";
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
        <button type="submit" className="button">
          Add option
        </button>
      </form>
    );
  }
}
export default AddOption;
