import express from "express";
import userRouter from "./src/routes/user.routes.js";
import { isAdminMiddleware } from "./src/middlewares/auth.middleware.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", isAdminMiddleware, userRouter);

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
