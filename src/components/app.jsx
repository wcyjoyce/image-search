import React, { Component } from "react";
import axios from "axios";

import Search from "./search.jsx";

class App extends Component {
  state = { images: [] };

  // Unsplash API #1: handling requests with response
  handleSearchSubmit = (term) => {
    axios.get("https://api.unsplash.com/search/photos/", {
      params: { query: term },
      headers: { Authorization: "Client-ID 3a139e31b7eb7756997620313d76a9cc1df304f83ee8b55fddd559d5c858e8c1" }
    }).then((response) => {
      this.setState({ images: response.data.results });
    })
  }

  // Unsplash API #2: handling requests with Async
  // handleSearchSubmit = async (term) => {
  //   const response = await axios.get("https://api.unsplash.com/search/photos/", {
  //     params: { query: term },
  //     headers: { Authorization: "Client-ID 3a139e31b7eb7756997620313d76a9cc1df304f83ee8b55fddd559d5c858e8c1" }
  //   });
  //   this.setState({ images: response.data.results });
  // }

  render() {
    return (
      <div className="ui container">
        <Search onSubmit={this.handleSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
