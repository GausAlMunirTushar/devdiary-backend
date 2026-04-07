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

const verifyEmail = (req, res) => {
	const { email } = req.body;
	const otp = Math.floor(100000 + Math.random() * 900000);
	res.json({
		message: `Verify email: ${email} please check your email`,
	});
};

export { register, login, verifyEmail };
