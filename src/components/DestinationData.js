import "./DestinationStyles.css";
import contin from "../album/contin.png";
import nonfic from "../album/nonfic.png";
import { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className="destination">
        <div className={this.props.className}>
          <div className="des-text">
            <h2>{this.props.heading}</h2>
            <p>{this.props.text}</p>
          </div>

          <div className="image">
            <img alt="img" src={this.props.img1} />
            <img alt="img" src={this.props.img2} />
          </div>
        </div>
      </div>
    );
  }
}

export default DestinationData;
