import mongoose from "mongoose";

const connectDatabase = async () => {
	try {
		await mongoose.connect("mongodb://127.0.0.1:27017/devdiary");
		console.log("MongoDB connected");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};

export default connectDatabase;
