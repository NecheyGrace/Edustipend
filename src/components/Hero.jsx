import React from "react";

function Hero() {
  return (
    <div className="Container">
      <div className="header">
        <p>Contact Us</p>
        <a id="header-button">Signup</a>
      </div>

      <div className="Hero-content">
        <div className="Hero-title">
          <h2 className="Hero-header">Make your party fun!</h2>
          <p>Create your own custom playlist today</p>

          <a href="#" id="">
            Create playlist
          </a>
        </div>

        <div className="Sidebar">
          <p>Trending by songs</p>
          <li>
            Unavailable by <span style={{ fontStyle: "italic" }}>Davido</span>{" "}
            <span style={{ fontWeight: "bold" }}>+</span>
          </li>
          <li>
            Unavailable by <span style={{ fontStyle: "italic" }}>Davido</span>{" "}
            <span style={{ fontWeight: "bold" }}>+</span>
          </li>
          <li>
            Unavailable by <span style={{ fontStyle: "italic" }}>Davido</span>{" "}
            <span style={{ fontWeight: "bold" }}>+</span>
          </li>
          <li>
            Unavailable by <span style={{ fontStyle: "italic" }}>Davido</span>{" "}
            <span style={{ fontWeight: "bold" }}>+</span>
          </li>
          <li>
            Unavailable by <span style={{ fontStyle: "italic" }}>Davido</span>{" "}
            <span style={{ fontWeight: "bold" }}>+</span>
          </li>

          <a href="#">View more</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
