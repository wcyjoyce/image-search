import React, { Component } from "react";

const Images = (props) => {
  const images = props.images.map((image) => {
    return <img alt={image.description} key={image.id} src={image.urls.regular} />
  });

  return <div className="images">{images}</div>;
}

export default Images;
