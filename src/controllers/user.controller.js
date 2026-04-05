export const createUser = (req, res) => {
	const { name, email } = req.body;
	res.json({
		message: "User created successfully",
		user: { name, email },
	});
};
