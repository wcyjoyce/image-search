import React, { Component } from "react";

import Search from "./search.jsx";
import Images from "./images.jsx";
import unsplash from "../api/unsplash.jsx";

class App extends Component {
  state = { images: [] };

  // Unsplash API #1: handling requests with response
  handleSearchSubmit = (term) => {
    unsplash.get("/search/photos/", {
      params: { query: term }
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
        <Images images={this.state.images} />
      </div>
    );
  }
}

export default App;
