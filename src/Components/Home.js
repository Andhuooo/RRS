// components/Home.js
import React from 'react';
import logo from '../logo.png';
import logo1 from '../logo1.jpg';
import './Home.css';


function Home() {
  return (
    <div>
      <header>
        <div className="header-section">
          <img src={logo} className="logo" alt="Logo" />
          <h1>Wellness Eats</h1>
        </div>
        <p>Discover healthy restaurant options to support your well-being.</p>
      </header>

      <section className="banner">
        <div className="banner-content">
          <h2>Welcome to Wellness Eats</h2>
          <p>Discover healthy dining options tailored to your dietary needs.</p>
          {/* Additional content related to the banner section */}
        </div>
      </section>

      <section className="carousel-banner">
        {/* First carousel banner */}
        <div className="carousel-banner-item">
          <img src={logo1} alt="Carousel Image 1" />
          <div className="carousel-banner-caption">
            <h3>Discover New Restaurants</h3>
            <p>Explore a variety of healthy eateries near you.</p>
          </div>
        </div>

        {/* Second carousel banner */}
        <div className="carousel-banner-item">
          <img src={logo1} alt="Carousel Image 2" />
          <div className="carousel-banner-caption">
            <h3>Customize Your Diet Plan</h3>
            <p>Create a personalized diet plan based on your preferences.</p>
          </div>
        </div>
      </section>

      {/* Additional content for the home page */}
    </div>
  );
}

export default Home;
