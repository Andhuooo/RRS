import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SearchBar from "./SearchBar";
import { redirect } from "react-router-dom";
import { getMealPlan } from "../libs/api";
import { getRestaurantPlan } from "../libs/api";
//import userprofile from '../userprofile.png';
function Dashboard() {
	const user = localStorage.getItem("user");
	const [mealPlan, setMealPlan] = useState({});
	const [restaurantPlan, setRestaurantPlan] = useState({});

	useEffect(() => {
		console.log(user);
		if (!user) {
			window.location.href = "/login";
		}
		if (user) {
			handleUpdateMealPlan();
		}
		if (user) {
			handleUpdateRestaurantPlan();
		}
	}, []);

	const handleUpdateMealPlan = async () => {
		const response = await getMealPlan({ email: user });

		if (response && response.status === 200) {
			setMealPlan(response.data.mealPlan);
		}
	};

	const handleUpdateRestaurantPlan = async () => {
		const response = await getRestaurantPlan({ email: user });

		if (response && response.status === 200) {
			setRestaurantPlan(response.data.restaurantPlan);
		}
	};

	return (
		<React.Fragment>
			<div>
				<p style={{ height: "30px" }}></p>
			</div>
			<div>
				<h2>Dashboard</h2>

				<SearchBar />

				{/* Profile Section */}
				
			{/*	<div className="profile-section">
              <div className="profile-icon">
            <img
              src="../userprofile.png"
              className="userprofile"
              alt="User Profile"
            />
            
          </div>
		  {/* Profile Section */}
          {/* Content for the profile section */}
		 {/*} </div>
        
				{/* Cart Section */}
				<div className="cart-section">{/* Content for the cart section */}</div>

				{/* Recommended Restaurants */}
				<h3>Recommended Restaurants</h3>
				<div className="Recommended-Restaurants-container">
					{restaurantPlan.restaurants &&
						restaurantPlan.restaurants.map((restaurant) => {
							return (
								<div className="Recommended-Restaurants-item" key={restaurant.name}>
									<h4>{restaurant.name}</h4>
									<p>{restaurant.location}</p>
									{restaurant.menu.map((menu) => {
										return (
											<div className="menu-item" key={menu.name}>
												<h5>{menu.name}</h5>
												<p>{menu.items}</p>
											</div>
										);
									})}
								</div>
							);
						})}
				</div>
				{/* Recommended restaurants content */}

				{/* Diet Plan */}
				<h3>Diet Plan</h3>
				<div className="diet-plan-container">
					{mealPlan.meals &&
						mealPlan.meals.map((meal) => {
							return (
								<div className="diet-plan-item" key={meal.name}>
									<h4>{meal.name}</h4>
									<p>{meal.description}</p>
									{meal.recipes.map((recipe) => {
										return (
											<div className="recipe-item" key={recipe.name}>
												<h5>{recipe.name}</h5>
												<p>{recipe.instructions}</p>
											</div>
										);
									})}
								</div>
							);
						})}
				</div>
				{/* Diet plan content */}

				{/* Recent Activity */}
				<h3>Recent Activity</h3>
				{/* Recent activity content */}
			</div>
		</React.Fragment>
	);
}

export default Dashboard;
