// components/Home.js
import React from 'react';
import './Home.css';
import Homebanner from '../Homebanner.jpg';
import DietImg from '../dietImg.jpg';
import RestuarantImg from '../restuarantImg.jpg'
import Header from './common/Header';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const handleBannerClick = () => {
    navigate('/login'); // Replace '/login' with the actual path of your login page
  };
  
  return (
    <div>
      <Header></Header>

      <section className="banner">
      </section>

      <section className="carousel-banner">
        {/* First carousel banner */}
        <div className="carousel-banner-item" onClick={handleBannerClick}>
          <img src={RestuarantImg} alt="Carousel Image 1" />
          <div className="carousel-banner-caption">
            <h3>Discover New Restaurants</h3>
            <p>Explore a variety of healthy eateries near you.</p>
          </div>
        </div>

        {/* Second carousel banner */}
        <div className="carousel-banner-item" onClick={handleBannerClick}>
          <img src={DietImg} alt="Carousel Image 2" />
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
