import React, { Component } from "react";
import Image from "./image.jsx";

const Images = (props) => {
  const images = props.images.map((image) => {
    return <Image key={image.id} image={image} />
  });

  return <div className="images">{images}</div>;
}

export default Images;
