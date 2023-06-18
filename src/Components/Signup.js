// Signup.js

import React, { useState, useEffect } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
	// const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [dietaryPreferences, setDietaryPreferences] = useState("");
	const [age, setAge] = useState("");
	const [location, setLocation] = useState("");
	const [gender, setGender] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			navigate("/dashboard");
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		// Create a new user object
		const newUser = {
			// username,
			password,
			email,
			dietaryPreferences,
			age,
			location,
			gender,
		};

		// Make an API call to create a new user
		fetch("http://localhost:3000/api/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					alert("Signup successful" + data.message);
					console.log("Signup successful");
					navigate("/dashboard"); // Redirect to the dashboard after successful signup
				} else {
					console.error("Signup failed:", data.message);
					alert("Signup failed" + JSON.stringify(data));
				}
			})
			.catch((error) => {
				console.error("Error creating user:", error);
			});
	};

	return (
		<div className="signup-container">
			<h2>Sign Up</h2>
			<form onSubmit={handleSubmit} className="form-container">
				<div className="field-container">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</div>
				{/* <div className="field-container">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
					/>
				</div> */}
				<div className="field-container">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</div>

				<div className="field-container">
					<label htmlFor="diretary_preference">Dietery Preference</label>
					<select
						className="dropdown-menu"
						id="dietary_preference"
						value={dietaryPreferences}
						onChange={(e) => setDietaryPreferences(e.target.value)}
						required
					>
						<option value="">Dietary Preference</option>
						<option value="vegeterian">Vegeterian</option>
						<option value="non_vegetarian">Non Vegetarian</option>
						<option value="any">Any</option>
					</select>
				</div>
				<div className="field-container">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						value={age}
						onChange={(e) => setAge(e.target.value)}
						required
					/>
				</div>
				<div className="field-container">
					<label htmlFor="location">Location</label>
					<input
						type="text"
						id="location"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						required
					/>
				</div>
				<div className="field-container">
					<label htmlFor="gender">Gender</label>
					<select
						className="dropdown-menu"
						id="gender"
						value={gender}
						onChange={(e) => setGender(e.target.value)}
						required
					>
						<option value="">Select Gender</option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="other">Other</option>
					</select>
				</div>
				<button type="submit">Sign Up</button>
			</form>
			<div className="login-redirect-container">
				<h3>Already have an account?</h3>

				<a href="/login">Login</a>
			</div>
		</div>
	);
}

export default Signup;
