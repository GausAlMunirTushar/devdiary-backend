import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
	title: String,
	author: String,
	description: String,
});

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
