import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import blogRouter from "./routes/blog.routes.js";
import authRouter from "./routes/auth.routes.js";
import connectDatabase from "./config/database.js";

// Load environment variables from .env file
configDotenv();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the DevDiary API!" });
});

app.use("/blogs", blogRouter);
app.use("/auth", authRouter);

connectDatabase();
app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
