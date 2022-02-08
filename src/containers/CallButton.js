import React, { Component } from "react";
import { connect } from "react-redux";

/**
 * @author
 * @class CallButton
 **/

class CallButton extends Component {
  state = {};
  render() {
    return (
      <div className="call-btn">
        <a href="#" title="Appeler">
          <i className="fas fa-phone-alt"></i>
        </a>
      </div>
    );
  }
}

export default CallButton;
