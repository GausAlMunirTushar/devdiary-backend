export const isAdminMiddleware = (req, res, next) => {
	const isAdmin = req.headers["x-is-admin"] === "true";
	if (!isAdmin) {
		return res.status(403).json({ message: "Forbidden: Admins only" });
	}
	next();
};
