const remote = false;
const DB_URL = remote
	? "mongodb+srv://ajay:pass1234@cluster0.tc816.mongodb.net/meal-planner"
	: "mongodb://localhost:27017/mydatabase";

module.exports = { DB_URL };
