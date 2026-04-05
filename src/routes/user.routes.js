import { Router } from "express";
import { createUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.post("/", createUser);
userRouter.get("/", (req, res) => {
	res.json({
		message: "Get all users",
	});
});

export default userRouter;
