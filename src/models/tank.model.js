import mongoose from "mongoose";

const schema = new mongoose.Schema({
	name: String,
	size: String,
});
const Tank = mongoose.model("Tank", schema);

Tank.insertMany([{ size: "small" }]);
Tank.find({ size: "small" });
Tank.deleteOne({ size: "small" });
