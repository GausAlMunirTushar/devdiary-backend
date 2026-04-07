import { Router } from "express";
import {
	createBlog,
	getBlogById,
	getBlogs,
} from "../controllers/blog.controller.js";

const blogRouter = Router();

// use of auth middleware will be here (authentication and authorization)
const isLoginedIn = (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({ message: "You are not logged in" });
	}
	next();
};
const checkPermission = (req, res, next) => {
	// check if the user has permission to create a blog
	const userRole = req.headers["x-user-role"];
	if (userRole !== "admin") {
		return res
			.status(403)
			.json({ message: "You do not have permission to create a blog" });
	}
	next();
};

blogRouter.get("/", getBlogs);
blogRouter.post("/", isLoginedIn, checkPermission, createBlog);
blogRouter.get("/:id", getBlogById);

blogRouter.put("/:id", (req, res) => {
	const { id } = req.params;
	res.json({
		message: `Update blog with ID: ${id}`,
	});
});

blogRouter.delete("/:id", (req, res) => {
	const { id } = req.params;
	res.json({
		message: `Delete blog with ID: ${id}`,
	});
});

export default blogRouter;
