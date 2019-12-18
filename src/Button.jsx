import React from "react";

class Button extends React.Component {
  render() {
    const { label, handleClick } = this.props;
    return (
      <button
        type="button"
        class="btn btn-outline-primary btn-lg btn-block"
        onClick={handleClick}
      >
        {label}
      </button>
    );
  }
}

export default Button;
