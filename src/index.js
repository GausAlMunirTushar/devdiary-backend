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

const allowedOrigins = [
	"https://devdiary.gausalmunir.site",
	"http://localhost:3000",
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: function (origin, callback) {
			// Allow requests with no origin (like mobile apps or curl requests)
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) !== -1) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
		methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
		allowedHeaders: ["Content-Type", "Authorization"],
	})
);

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the DevDiary API!" });
});

app.use("/blogs", blogRouter);
app.use("/auth", authRouter);

connectDatabase();
app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
