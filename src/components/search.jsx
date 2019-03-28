import React, { Component } from "react";

class Search extends Component {
  state = { term: "" };

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <input
            type="text"
            placeholder="Search"
            value={this.state.term}
            onChange={this.handleChange}
          />
        </div>
        </form>
      </div>
    );
  }
}

export default Search;
