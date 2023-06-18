// components/Login.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import { login } from "../libs/api";

function Login() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		const user = localStorage.getItem("user");
		if (user) {
			navigate("/dashboard");
		}
	}, []);

	const handleLogin = async (e) => {
		e.preventDefault();
		const response = await login({ email: username, password });
		if (response && response.status === 200) {
			localStorage.setItem("user", response.data.email);
			navigate("/dashboard");
		} else {
			alert("Login failed");
		}

		// Check if the entered username and password match the default values
	};
	return (
		<div className="login-container">
			<h2>Login</h2>
			<form onSubmit={handleLogin}>
				<div className="field-container">
					<label>
						Username:
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
				</div>
				<div className="field-container">
					<label>
						Password:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				<button type="submit">Login</button>
			</form>
			<div className="signup-redirect-container">
				<h3>Do not have an account yet ?</h3>

				<a href="/signup">Signup</a>
			</div>
		</div>
	);
}

export default Login;
