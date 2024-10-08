import React from "react";
import $ from "jquery";
import "turn.js";

class Turn extends React.Component {
  static defaultProps = {
    style: {},
    className: "",
    options: {}
  };

  componentDidMount() {
    if (this.el) {
      $(this.el).turn(Object.assign({}, this.props.options));
    }
    document.addEventListener("keydown", this.handleKeyDown, false);
  }

  // componentWillUnmount() {
  //   if (this.el) {
  //     $(this.el)
  //       .turn("destroy")
  //       .remove();
  //   }
  //   document.removeEventListener("keydown", this.handleKeyDown, false);
  // }

  handleKeyDown = event => {
    if (event.keyCode === 37) {
      this.turnPrevious();
    }
    if (event.keyCode === 39) {
      this.turnNext();
    }
  };

  turnNext = () => {
    if (this.el) {
      $(this.el).turn("next");
    }
  };

  turnPrevious = () => {
    if (this.el) {
      $(this.el).turn("previous");
    }
  };

  render() {
    return (
      <div
        className={this.props.className}
        style={Object.assign({}, this.props.style)}
        ref={el => (this.el = el)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Turn;
