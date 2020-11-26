import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FaChevronDown } from "react-icons/fa";
import aboutImage from "../images/img_about.png";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="about-page-main-container">
        <div className="about-main-area">
          <div className="about-left-side-container">
            <div className="header">
              <div className="line"></div>
              <div className="title">
                <h1>About us</h1>
              </div>
            </div>
            <div className="impact-area">
              <h1>Impact</h1>
              <h1>
                By design <div className="dot"></div>
              </h1>
            </div>
            <div className="details-area">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                quasi tempora dipisicing elit. Nam quasi tempora.
              </p>
            </div>
            <div className="scroll-down-area">
              <div className="scroll-down-container">
                <IconContext.Provider
                  value={{ className: "scroll-arrow-about" }}
                >
                  <FaChevronDown />
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="right-area-contaner">
            <div className="image-wrapper">
              <img src={aboutImage} alt="" srcset="" />
            </div>
          </div>
        </div>

        {/* <div className="about-details">
          <div className="items-grid">
            <div className="item-container">
              <div className="header">
                <h1>Things</h1>
                <h1>Are made Perfect</h1>
                <h3>Lorem ipsum dolor sit.</h3>
              </div>
              <div className="details">
                <p>
                  Launching your idea requires selling a promise. Our
                  experienced design team focuses on the following disciplines
                  needed to build that promise.
                </p>
              </div>
            </div>
            <div className="item-container">
              <div className="details">
                <p>Communication Design (Pitch Decks)</p>
                <p>Branding</p>
                <p>Brand Strategy</p>
                <p>Digital Design UI/UX</p>
                <p>Front End Development</p>
              </div>
            </div>
            <div className="item-container">
              <div className="details">
                <p>Industrial Design</p>
                <p>Motion Graphics</p>
                <p>3D Graphics</p>
                <p>Campaign Specific Photography</p>
                <p>Trade Show Support</p>
              </div>
            </div>
          </div>
        </div> */}

        <div className="who-we-are-area">
          <div className="left-area">
            <div className="vertical-image"></div>
            <div className="horizontal-image"></div>
          </div>
          <div className="right-area">
            <div className="header">
              <h1>Who we are</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              quasi cum nemo soluta laudantium.
            </p>
            <div className="learn-more-btn">Explore</div>
          </div>
        </div>

        <div className="our-mission-main-container">
          <div className="left-container">
            <div className="header">
              <h1>Our mission</h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              quasi cum nemo soluta laudantium.
            </p>
            <div className="learn-more-btn">Explore</div>
          </div>
          <div className="right-container">
            <div className="vertical-image"></div>
            <div className="horizontal-image"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
