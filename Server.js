// server.js

// Import required modules
const express = require("express");
const mongoose = require("mongoose");

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
	.connect(
		"mongodb+srv://ajay:pass1234@cluster0.tc816.mongodb.net/meal-planner",
		{
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}
	)
	.then(() => {
		console.log("Connected to MongoDB");
	})
	.catch((error) => {
		console.error("Error connecting to MongoDB:", error);
	});

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
	res
		.status(200)
		.json({ success: true, data: "signup successfull", email: newUser.email });
	return;
});

app.post("/api/login", async (req, res) => {
	// Retrieve login data from the request body
	const { email, password } = req.body;
	console.log("🚀 ~ file: Server.js:100 ~ app.post ~ password:", password);
	console.log("🚀 ~ file: Server.js:100 ~ app.post ~ email:", email);

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

// Start the server
const port = 3000;
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
