import React, { Component } from "react";

class Image extends Component {
  render() {
    const { urls, description } = this.props.image;

    return (
      <div className="image">
        <img src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default Image;
