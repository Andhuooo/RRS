import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Dashboard from "./Components/Dashboard";
import SearchBar from "./Components/SearchBar";
import Userprofile from "./Components/Userprofile";
import "./styles.css";

function App() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<Appbar />
					</ul>
				</nav>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/searchbar" element={<SearchBar />} />
					<Route path="/userprofile" element={<Userprofile />} />

				</Routes>
			</div>
		</Router>
	);
}

function Appbar() {
	const location = useLocation();
	//const isDashboardRoute = location.pathname === "/dashboard";
    const isDashboardRoute = true;

	const handleLogout = () => {
		localStorage.removeItem("user");
	};

	if (isDashboardRoute) {
		return (
			<>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/login">Log In</Link>
				</li>
				<li>
					<Link to="/signup">Sign Up</Link>
				</li>
				<li>
					<Link to="/login" onClick={() => handleLogout()}>
						Log Out
					</Link>
				</li>
				<li>
					<Link to="/userprofile">User Profile</Link>
				</li>
			</>
		);
	} else if (!isDashboardRoute) {
		return <React.Fragment></React.Fragment>;
	}
}

export default App;
