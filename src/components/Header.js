import React ,{ Component } from "react";
import CounterButton from "./CounterButton.js";
import "./Header.css";

class Header extends Component {

  //prevent header from re-rendering
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }

  render() {
    return (
      <div>
        <h1>Pokemon Search</h1>
        {/* <CounterButton color="white" /> */}
      </div>
    )
  }
};

export default Header;