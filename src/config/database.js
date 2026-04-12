import mongoose from "mongoose";

const connectDatabase = async () => {
	try {
		const mongoUri = process.env.MONGODB_URI;
		if (!mongoUri) {
			throw new Error(
				"MONGODB_URI is not defined in environment variables.",
			);
		}
		await mongoose.connect(mongoUri);
		console.log("MongoDB connected");
	} catch (error) {
		console.error("Error connecting to MongoDB:", error);
		process.exit(1);
	}
};

export default connectDatabase;
