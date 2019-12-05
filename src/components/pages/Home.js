import React, { Component } from "react";
import "./home.css";
import Play from "../../Assets/PNG/play/ic-play-circle-outline.png";
import Lounge from "../../Assets/PNG/lounge/rectangle-7.png";
import Room1 from "../../Assets/PNG/room1/rectangle-8-copy.png";
import Pattern1 from "../../Assets/PNG/pattern1/rectangle-11.png";
import Profile from "../../Assets/PNG/profile/oval.png";
import Map from "./map";
export default class Home extends Component {
  render() {
    return (
      <div className="home-wrapper">
        <div className="banner">
          <div className="banner-content">
            <div className="content-items">
              <p className="banner-top-text">WELCOME TO</p>
              <p className="banner-title">TRANSCORP HOTEL</p>
              <p className="banner-bottom-text">
                A place to experience and enjoy the life
              </p>
              <img src={Play} alt="" className="play" />
            </div>
          </div>
        </div>
        <div className="easy-check">
          <div className="check-left">
            <div className="checkin">
              <p>CHECK-IN</p>
              <div className="bottom">
                <span className="day">24</span>
                <span className="month">/JUNE</span>
              </div>
            </div>
            <div className="checkout">
              <p>CHECK-OUT</p>
              <div className="bottom">
                <span className="day">24</span>
                <span className="month">/JUNE</span>
              </div>
            </div>
            <div className="guests">
              <p>GUESTS</p>
              <div className="bottom">
                <span className="day">24</span>
              </div>
            </div>
          </div>
          <div className="check-right">
            <div className="check-availability">
              <p className="code">Have a promotional code?</p>
              <div className="availability">CHECK AVAILABILITY</div>
            </div>
          </div>
        </div>
        <div className="about-us">
          <div className="row">
            <div className="col m4"></div>
            <div className="col m4">
              <p className="top-text">ABOUT US</p>
              <p className="title">A best place to enjoy your life</p>
              <p className="bottom-text">
                Transcorp Hilton Hotel is situated in the heart of Nigeria’s
                Federal Capital Territory, a 40-minute drive from the Nnamdi
                Azikiwe International Airport in Abuja. It is a 670–room, 5-star
                hotel that provides luxury accommodation, exotic cuisine, and
                fully equipped meeting rooms and to business travellers and
                tourists from all over the world
              </p>
            </div>
            <div className="col m4"></div>
          </div>

          <div className="row">
            <div className="col l3"></div>
            <div className="col l6">
              <img src={Lounge} alt="" className="lounge" />
            </div>
            <div className="col l3"></div>
          </div>
          <div className="pattern-box">
            <p className="view-more">VIEW MORE PHOTOS</p>
            <div className="rooms-holder row">
              <div className=" rooms-left">
                <div className="row">
                  <div className="col m3"></div>
                  <div className="col m9">
                    <p className="discover">DISCOVER OUR ROOMS</p>
                    <p className="title">Luxury interior</p>
                    <div className="room-list">
                      <div className="room">
                        <img src={Room1} alt="" className="room-img" />
                        <div className="room-right">
                          <div className="type">Classic Room</div>
                          <div className="details">
                            <span>Starting from </span>
                            <span className="price">$40.00</span>
                            <span>/Night</span>
                          </div>
                        </div>
                      </div>
                      <div className="room">
                        <img src={Room1} alt="" className="room-img" />
                        <div className="room-right">
                          <div className="type">Classic Room</div>
                          <div className="details">
                            <span>Starting from </span>
                            <span className="price">$40.00</span>
                            <span>/Night</span>
                          </div>
                        </div>
                      </div>
                      <div className="room">
                        <img src={Room1} alt="" className="room-img" />
                        <div className="room-right">
                          <div className="type">Classic Room</div>
                          <div className="details">
                            <span>Starting from </span>
                            <span className="price">$40.00</span>
                            <span>/Night</span>
                          </div>
                        </div>
                      </div>
                      <div className="room">
                        <img src={Room1} alt="" className="room-img" />
                        <div className="room-right">
                          <div className="type">Classic Room</div>
                          <div className="details">
                            <span>Starting from </span>
                            <span className="price">$40.00</span>
                            <span>/Night</span>
                          </div>
                        </div>
                      </div>
                      <div className="room">
                        <img src={Room1} alt="" className="room-img" />
                        <div className="room-right">
                          <div className="type">Classic Room</div>
                          <div className="details">
                            <span>Starting from </span>
                            <span className="price">$40.00</span>
                            <span>/Night</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" rooms-right">
                <img src={Room1} alt="" className="left-img" />
              </div>
            </div>
            <div className="testimonial-section">
              <p className="top-text">TESTIMONIALS</p>
              <p className="title">What guests Say</p>
              <p className="text">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                commodo urna id neque finibus, ac sollicitudin arcu tempus. In
                hac habitasse platea dictumst”
              </p>
              <img src={Profile} alt="" className="profile-img" />
              <p className="profile-name">FARAH WILIAMS</p>
            </div>
            <div className="blog">
              <p className="heading">Latest from our Blog</p>
              <div className="row">
                <div className="col l4">
                  <div class="card z-depth-0">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={Room1} />
                    </div>
                    <div class="card-content">
                      <p className="card-date">April 10th, 2018</p>
                      <span class="card-title card-heading  grey-text text-darken-4">
                        Five reasons to stay at the beautiful Transcorp Hotel
                      </span>
                      <p className="continue">Continue  <i class="fas fa-arrow-right"></i></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">
                        Card Title<i class="material-icons right">close</i>
                      </span>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col l4">
                  <div class="card z-depth-0">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={Room1} />
                    </div>
                    <div class="card-content">
                      <p className="card-date">April 10th, 2018</p>
                      <span class="card-title card-heading  grey-text text-darken-4">
                        Five reasons to stay at the beautiful Transcorp Hotel
                      </span>
                      <p className="continue">Continue  <i class="fas fa-arrow-right"></i></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">
                        Card Title<i class="material-icons right">close</i>
                      </span>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col l4">
                  <div class="card z-depth-0">
                    <div class="card-image waves-effect waves-block waves-light">
                      <img class="activator" src={Room1} />
                    </div>
                    <div class="card-content">
                      <p className="card-date">April 10th, 2018</p>
                      <span class="card-title card-heading  grey-text text-darken-4">
                        Five reasons to stay at the beautiful Transcorp Hotel
                      </span>
                      <p className="continue">Continue  <i class="fas fa-arrow-right"></i></p>
                    </div>
                    <div class="card-reveal">
                      <span class="card-title grey-text text-darken-4">
                        Card Title<i class="material-icons right">close</i>
                      </span>
                      <p>
                        Here is some more information about this product that is
                        only revealed once clicked on.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <div className=" contact-left">{<Map />}</div>
              <div className=" contact-right">
                <p className="discover">DISCOVER OUR ROOMS</p>
                <p className="title">Luxury interior</p>
                <div className="address1">
                  <span className="state">Abuja, </span>
                  <span className="country">Nigeria</span>
                </div>
                <div className="address2">
                  Address: 1 Aguiyi Ironsi St, Abuja 900001, Nigeria Email:
                  info@transcorphotelsplc.com
                </div>
                <p className="call-directly">Call directly;</p>
                <p className="number">+234 708 060 3000</p>
              </div>
            </div>

            <div className="footer-wrapper">
              <div className="row footer  container">
                <div className="col s3">
                  <ul className="footer-list">
                    <li>Site Map</li>
                    <li>Terms and Condition</li>
                    <li>Privacy Policy</li>
                    <li>Help</li>
                    <li>Affiliate</li>
                  </ul>
                </div>
                <div className="col s3">
                  <ul className="footer-list">
                    <li>Our Locationp</li>
                    <li>Career</li>
                    <li>About</li>
                    <li>Contact</li>
                    
                  </ul>
                </div>
                <div className="col s3">
                  <ul className="footer-list">
                    <li>FAQs</li>
                    <li>Blog</li>
                    <li>Car Blog</li>
                    <li>Location</li>
                    <li>Press</li>
                  </ul>
                </div>
                <div className="col s3">
                  <p className="signup">Sign up to get our newsletter</p>
                  <form action="">
                    <input placeholder='Your email...' type="email" className="email" />
                    <span className="icon"><i class="fab fa-telegram-plane"></i></span>
                  </form>
                </div>
              </div>
              <div className="socials container">
                <span className="social-icon"><i class="fab fa-facebook-square"></i></span>
                <span className="social-icon"><i class="fab fa-twitter"></i></span>
                <span className="social-icon"><i class="fab fa-google-plus-g"></i></span>
                <span className="social-icon"><i class="fab fa-linkedin"></i></span>
                <span className="social-icon"><i class="fab fa-instagram"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
