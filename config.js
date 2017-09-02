module.exports = function() {

	switch(process.env.NODE_ENV) {
	case "development":
		return {
			"ROOT_URL": "http://127.0.0.1",
			"PORT": 8000
		};

	case "production":
		return {
			"ROOT_URL": "https://tdom.herokuapp.com",
			"PORT": process.env.PORT
		};
	}
};
