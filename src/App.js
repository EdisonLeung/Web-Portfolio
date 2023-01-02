import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  HashRouter,
  useRoutes,
} from "react-router-dom";
  
// import CampusMaps component
import CampusMap from "./projects/CampusMap";

import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home/> },
    { path: "/CampusMap", element: <CampusMap resumeData={resumeData} /> },    
  ]);
  return routes;
};
const AppWrapper = () => {
  return (
    <Router basename="/">
      <App />
    </Router>
  );
};

function Home() {
  return (
    <div className="App">
      <Header resumeData={resumeData}/>
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio resumeData={resumeData}/>
      <ContactUs resumeData={resumeData}/>
      <Footer resumeData={resumeData}/>
    </div>
  );}
export default AppWrapper;