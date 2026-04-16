import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema(
	{
		blogId: {
			type: Schema.Types.UUID,
			required: true,
			unique: true,
		},
		title: {
			type: String,
			required: true,
		},
		slug: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			maxLength: 100,
		},
		password: {
			type: Number,
			required: true,
			min: [6, "Minimum 6 characters in password"],
		},
		author: String,
		description: String,
		skills: [String],
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
