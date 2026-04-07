import express from "express";
import cors from "cors";
import blogRouter from "./routes/blog.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
	res.json({ message: "Welcome to the DevDiary API!" });
});

app.use("/blogs", blogRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
	console.log(`Server is running on port http://localhost:${port}`);
});
