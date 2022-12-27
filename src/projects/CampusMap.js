import React from "react";

const CampusMap = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const Body = () => {
  return ( 
    <div id="map">
      <MapContainer center={position} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {[this.renderLines(), this.renderMarkers()]}
      </MapContainer>
    </div>
  );
};
const Header = () => {
  return (
    <React.Fragment>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          Hide navigation
        </a>
        <ul id="nav" className="nav">
          <li>
            <a className="smoothscroll" href="/#home">
              Home
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#resume">
              Resume
            </a>
          </li>
          <li className="current">
            <a className="smoothscroll" href="/#portfolio">
              Projects
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="/#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};
export default CampusMap;
