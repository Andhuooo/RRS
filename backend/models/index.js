const mongoose = require("mongoose");

// Create a user schema
const userSchema = new mongoose.Schema({
	username: String,
	password: String,
	email: String,
	dietaryPreferences: String,
	age: Number,
	location: String,
	gender: String,
});

const mealPlanScheme = new mongoose.Schema({
	mealPlanId: String,
	meals: Array,
});
const restaurantPlanScheme = new mongoose.Schema({
	restaurantPlanId: String,
	restaurants: Array,
  });
  

// Create a User model with collection name "users"
const User = mongoose.model("User", userSchema, "users");
const MealPlan = mongoose.model("MealPlan", mealPlanScheme, "mealPlans");
const RestaurantPlan = mongoose.model("RestaurantPlan", restaurantPlanScheme, "restaurantPlans");

module.exports = { User, MealPlan, RestaurantPlan };