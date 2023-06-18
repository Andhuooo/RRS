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

// Create a User model with collection name "users"
const User = mongoose.model("User", userSchema, "users");
const MealPlan = mongoose.model("MealPlan", mealPlanScheme, "mealPlans");

module.exports = { User, MealPlan };