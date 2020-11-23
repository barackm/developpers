import React, { Component } from "react";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="home-main-container">
        <div className="container">
          <div className="hero-text">
            <h1>Web design</h1>
            <h1>Graphic design conception</h1>
            <h3>Web applications, Site web, Mobile Applications</h3>
          </div>
        </div>
        <div className="scroll-down-arrow">
          <section id="section10" className="demo">
            <a href="#thanks">
              <span></span>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

export default Home;
