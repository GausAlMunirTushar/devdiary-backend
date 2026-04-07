import { Router } from "express";
import {
	login,
	register,
	verifyEmail,
} from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", (req, res) => {
	res.json({
		message: "Logout user",
	});
});
authRouter.post("/verify-email", verifyEmail);

authRouter.post("/forgot-password", (req, res) => {
	const { email } = req.body;
	res.json({
		message: `Forgot password for email: ${email}`,
	});
});

export default authRouter;
