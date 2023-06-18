import axios from "axios";
const BASE_URL = "http://localhost:3000/api";

const signup = async (data) => {
	try {
		const response = await axios.post(`${BASE_URL}/signup`, {
			...data,
		});
		return response;
	} catch (err) {
		console.log(err);
	}
};

const login = async (data) => {
	try {
		const response = await axios.post(`${BASE_URL}/login`, {
			...data,
		});
		return response;
	} catch (err) {
		console.log(err);
	}
};

const getMealPlan = async (data) => {
	try {
		const response = await axios.get(`${BASE_URL}/meal-plans`, {
			params: { user: data.email },
		});
		return response;
	} catch (err) {
		console.log(err);
	}
};

export { signup, login, getMealPlan };
