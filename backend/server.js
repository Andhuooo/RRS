// server.js

// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const populator = require("./seeds");
const { User, MealPlan, RestaurantPlan } = require("./models");
const { DB_URL } = require("./config");

// initialize the populateMealPlans script
populator;

// Create an instance of Express app
const app = express();
//Add CORS middleware
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:3001");
	res.header("Access-Control-Allow-Methods", "GET, POST");
	res.header("Access-Control-Allow-Headers", "Content-Type");
	next();
});
// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB database
mongoose
	.connect(DB_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

// Signup API endpoint
app.post("/api/signup", async (req, res) => {
	// Retrieve signup data from the request body
	const {
		username,
		password,
		email,
		dietaryPreferences,
		age,
		location,
		gender,
	} = req.body;
	console.log(username);
	// Check if the user already exists in the database
	const user = await User.findOne({ email: email });
	if (user) {
		res
			.status(401)
			.json({ data: "user already exists with this email!", success: false });
		return;
	}

	const newUser = new User({
		username,
		password,
		email,
		dietaryPreferences,
		age,
		location,
		gender,
	});

	await newUser.save();

	res.cookie("user", newUser.email, {
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000, // 1 day
	});
	res.cookie ("age", newUser.age,{
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000, // 1 day
	});
	
	res
		.status(200)
		.json({ success: true, data: "signup successfull", email: newUser.email });
	return;
});

app.post("/api/login", async (req, res) => {
	// Retrieve login data from the request body
	const { email, password } = req.body;

	// Check if the user exists in the database and the provided password is correct
	const user = await User.findOne({ email: email });
	if (!user) {
		res.status(404).json({ message: "user not found", success: false });
		return;
	}
	if (user.password != password) {
		res.status(404).send("Incorrect password");
		return;
	}
	if (user.password === password) {
		res.cookie("user", user.email, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000, // 1 day
		});
		res.status(200).json({ data: "login successfull", email: user.email });
		return;
	}

	console.log(user);
});
app.get("/api/user-profile", async (req, res) => {
	// Retrieve the user email from the request cookie
	
	const email = req.query.user;
	// Query the database to get the user profile data based on the email
	const user = await User.findOne({ email: email });
	
  
	if (!user) {
	  res.status(404).json({ message: "User not found" });
	  return;
	}
	
  
	// Return the user profile data
	res
	.status(200)
	.json({ email: user.email,
		
		age: user.age,
		gender: user.gender,
		dietary_preference: user.dietaryPreferences,
		 });
		 
  });
app.get("/api/meal-plans", async (req, res) => {
	const email = req.query.user;
	const user = await User.findOne({ email: email });
	

	if (!user) {
		res.status(404).json({ message: "user not found", success: false });
	}

	let mealPlan = null;
	if (user.dietaryPreferences === "vegeterian" && user.age > 30) {
	mealPlan = await MealPlan.findOne({ mealPlanId: "1" });
} else if (user.dietaryPreferences === "non_vegeterian" && user.age > 30) {
	mealPlan = await MealPlan.findOne({ mealPlanId: "2" });
} else if (user.dietaryPreferences === "sugarfree" && user.age > 30){
	mealPlan = await MealPlan.findOne({ mealPlanId: "3" });
}else if (user.dietaryPreferences === "vegeterian" && user.age > 30){
	mealPlan = await MealPlan.findOne({ mealPlanId: "4" });
}

	if (!mealPlan) {
		res.status(404).json({ message: "meal plan not found", success: false });
		return;
	}

	res.status(200).json({ success: true, mealPlan: mealPlan });
});
app.get("/api/restaurant-plans", async (req, res) => {
	const email = req.query.user;
	const user = await User.findOne({ email: email });

	if (!user) {
		res.status(404).json({ message: "user not found", success: false });
	}

	let restaurantPlan = null;
	if ((user.dietaryPreferences === "vegetarian"  || user.dietaryPreferences === "sugarfree" )&& user.age > 30) {
	restaurantPlan = await RestaurantPlan.findOne({ restaurantPlanId: "1" });

}

	if (!restaurantPlan) {
		res.status(404).json({ message: "restaurant not found", success: false });
		return;
	}

	res.status(200).json({ success: true, restaurantPlan: restaurantPlan });
});


// Start the server
const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
