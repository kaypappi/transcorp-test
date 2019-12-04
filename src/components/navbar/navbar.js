import React, { Component } from "react";
import Logo from "../../Assets/PNG/transcorp/transcorp.png";
import "./navbar.css";

export default class navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav2">
          <div className="menu-top">
            <span className="contact-us">
              Contact us directly at 01 33943 +234 807 340 4890 ( Local time 12:
              00 )
            </span>
            <span className="language">EN</span>
          </div>
          <ul className="menu-list">
            <li className="left-menu">
              <p className="menu-text">HOME</p>
            </li>
            <li className="left-menu">
              <p className="menu-text">ABOUT US</p>
            </li>
            <li className="left-menu">
              <p className="menu-text">OUR ROOMS</p>
            </li>

            <li>
              <img src={Logo} alt="Logo" className="menu-logo" />
            </li>
            <li className="right-menu">
              <p className="menu-text">RESERVATION</p>
            </li>
            <li className="right-menu">
              <p className="menu-text">BLOG</p>
            </li>
            <li className="right-menu">
              <p className="menu-text">CONTACT</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
