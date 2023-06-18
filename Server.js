// server.js

// Import required modules
const express = require("express");
const mongoose = require("mongoose");

// Create an instance of Express app
const app = express();
//Add CORS middleware
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB database
mongoose
  .connect("mongodb://localhost:27017/mydatabase", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
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

// Create a User model with collection name "users"
const User = mongoose.model("User", userSchema, "users");

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
  const user = await User.findOne({ email: email })
      if(user){
        res.status(404).send("user already exists")
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

      res.status(200).json({"data" :"signup successfull"})


     
    });

app.post("/api/login", async(req, res) => {
    // Retrieve login data from the request body
    const { email, password } = req.body;
    console.log(email,password)
  
    // Check if the user exists in the database and the provided password is correct
    const user = await User.findOne({ email: email})
    if(!user){
        res.status(404).send("user not found")
        return
    }
    if(user.password!=password){
        res.status(404).send("Incorrect password")
        return
    }
    if(user.password===password){
        res.status(200).json({"data" :"login successfull"})
        return
    }

    console.log(user)
});
  

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});