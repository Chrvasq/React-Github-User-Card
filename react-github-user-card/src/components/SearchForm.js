import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.setSearchUser(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="input"
            placeholder="GitHub username"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <button>Search</button>
        </form>
      </>
    );
  }
}

export default SearchForm;
