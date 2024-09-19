import React from 'react';
import Header from '../header/Header';           // Go up one level and into 'header'
import HeroSection from "../herosection/HeroSection"; // Go up one level and into 'herosection'
import Speciality from "../speciality/Speciality";
import Container from "../container/Container";
import Footer from '../footer/Footer';
import './Homepage.css';  // Ensure this CSS file exists in the current folder

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <HeroSection />
      <Speciality />
      <Container />
      <Footer />
    </div>
  );
};

export default Homepage;
