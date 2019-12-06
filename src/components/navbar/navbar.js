import React, { Component } from "react";
import Logo from "../../Assets/PNG/transcorp/transcorp.png";
import M from "materialize-css/dist/js/materialize.min.js";
import "./navbar.css";

export default class navbar extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    var instance = M.Sidenav.init(elem, {
        edge: "left",
        inDuration: 250
    });
}
  render() {
    return (
      <div>
        <div className=" nav2">
          <div className="menu-top">
            <span className="contact-us">
              Contact us directly at 01 33943 +234 807 340 4890 ( Local time 12:
              00 )
            </span>
            <span className="language">EN<i class="fas fa-angle-down"></i></span>
          </div>
          <div className="menu-list hide-on-med-and-down">
           <span className="menu-left">HOME</span>
           <span className="menu-left">ABOUT US</span>
           <span className="menu-left">OUR ROOMS</span>
           <span className="menu-logo"><img src={Logo} alt="" className="menu-logo"/></span>
           <span className="menu-right">RESERVATION</span>
           <span className="menu-right">BLOG</span>
           <span className="menu-right">CONTACT</span>
          </div>
        </div>
        <div className='hide-on-large-only'>
                <ul id="slide-out" className="sidenav">
                    <li />
                    <li><a href='/'>HOME</a></li>
                    <li><a href='/'>ABOUT US</a></li>
                    <li><a href='/'>OUR ROOMS</a></li>
                    <li><a href='/'>RESERVATION</a></li>
                    <li><a href='/'>BLOG</a></li>
                    <li><a href='/'>CONTACT</a></li>
                    
                    
                </ul>

                <nav className='transparent z-depth-0 nav3'>
                    <div className="nav-wrapper  mobile-bar">
                        <a href="#" data-target="slide-out" className="sidenav-trigger black-text mobile-bar">
                        <i className="black-text hamburger fas fa-bars"></i>
                            
                        </a>
                        <img src={Logo} alt="" className="logo brand-logo  center"/>
                    </div>
                </nav>
            </div>
      </div>
    );
  }
}
