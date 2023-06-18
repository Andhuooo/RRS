import React from 'react';
import './Dashboard.css';
import SearchBar from './SearchBar';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <SearchBar />

      {/* Profile Section */}
      <div className="profile-section">
        {/* Content for the profile section */}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        {/* Content for the cart section */}
      </div>

      {/* Recommended Restaurants */}
      <h3>Recommended Restaurants</h3>
      {/* Recommended restaurants content */}

      {/* Diet Plan */}
      <h3>Diet Plan</h3>
      {/* Diet plan content */}

      {/* Recent Activity */}
      <h3>Recent Activity</h3>
      {/* Recent activity content */}
    </div>
  );
}

export default Dashboard;
