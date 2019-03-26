import React, { Component } from "react";

class Search extends Component {
  state = { term: ""}

  handleChange = (event) => {
    this.setState({ term: event.target.value });
  }

  render() {
    return (
      <div>
        <form className="ui form">
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
