import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import SearchBar from "./SearchBar";
import { redirect } from "react-router-dom";
import { getMealPlan } from "../libs/api";

function Dashboard() {
	const user = localStorage.getItem("user");
	const [mealPlan, setMealPlan] = useState({});

	useEffect(() => {
		console.log(user);
		if (!user) {
			window.location.href = "/login";
		}
		if (user) {
			handleUpdateMealPlan();
		}
	}, []);

	const handleUpdateMealPlan = async () => {
		const response = await getMealPlan({ email: user });

		if (response && response.status === 200) {
			setMealPlan(response.data.mealPlan);
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
				<div className="profile-section">
					{/* Content for the profile section */}
				</div>

				{/* Cart Section */}
				<div className="cart-section">{/* Content for the cart section */}</div>

				{/* Recommended Restaurants */}
				<h3>Recommended Restaurants</h3>
				{/* Recommended restaurants content */}

				{/* Diet Plan */}
				<h3>Diet Plan</h3>
				<div className="diet-plan-container">
					{mealPlan.meals &&
						mealPlan.meals.map((meal) => {
							return (
								<div className="diet-plan-item">
									<h4>{meal.name}</h4>
									<p>{meal.description}</p>
									{meal.recipes.map((recipe) => {
										return (
											<div className="recipe-item">
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
