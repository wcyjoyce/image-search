import React, { Component } from "react";

import Search from "./search.jsx";

class App extends Component {
  handleSearchSubmit = (term) => {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default App;
