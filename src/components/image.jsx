import React, { Component } from "react";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = { height: 0 };
    this.imageRef = React.createRef(); // creates reference
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.adjustHeight);
  }

  adjustHeight = () => {
    const height = this.imageRef.current.clientHeight;
    const adjustedHeight = Math.ceil(height / 10 + 1);
    this.setState({ height: adjustedHeight })
  }

  render() {
    const { urls, description } = this.props.image;
    const style = { gridRowEnd: `span ${this.state.height}` };

    return (
      <div className="image" style={style}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}

export default Image;
