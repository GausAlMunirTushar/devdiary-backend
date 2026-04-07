const register = (req, res) => {
	const { username, password } = req.body;
	res.json({
		message: `Register user with username: ${username} and password: ${password}`,
	});
};

const login = (req, res) => {
	const { username, password } = req.body;
	res.json({
		message: `Login user with username: ${username} and password: ${password}`,
	});
};
export { register, login };
