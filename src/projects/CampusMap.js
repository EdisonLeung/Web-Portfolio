import { GoogleMap, useLoadScript, Polyline } from "@react-google-maps/api";
import React, { useState } from "react";
import { UW_LATITUDE_CENTER, UW_LONGITUDE_CENTER } from "./Constants";

const CampusMap = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const Body = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBtHBT3bCfcUT9IYSmH-AujtdTjxKdIxWo",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
};

function Map() {
  const startPoint = { lat: 37.772, lng: -122.214 };
  const endPoint = { lat: 21.291, lng: -157.821 };
  const center = {lat: UW_LATITUDE_CENTER, lng: UW_LONGITUDE_CENTER}

  const [buildings, setBuildings] = useState([])
  async function initializeBuildingList() {
    const buildingMap = [];
    try {
        let responsePromise = fetch("http://localhost:4567/buildings");
        let response = await responsePromise;

        let building = (await response.json());
        for (let shortName in building) {
            buildingMap.push({shortName:shortName, longName: building[shortName]})
        }
    } catch (e) {
        alert("Unable to retrieve buildings");
        console.log(e);
    }
    setBuildings(buildingMap)
}
  return (
    <div>
      <div id="map">
        
        <GoogleMap zoom={15}  center={center} mapContainerClassName="map-container">
        <Polyline
        path={[startPoint, endPoint]}
        options={{
          strokeColor: '#ff2527',
          strokeOpacity: 0.75,
          strokeWeight: 2,
        }}
      />
        {buildings.toString()}
        </GoogleMap>
      </div>
    </div>
  );
}

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
