import Blog from "../models/blog.model.js";

const getBlogs = async (req, res) => {
	const blogs = await Blog.find();
	res.json({
		message: "Get all blogs",
		blogs,
	});
};

const createBlog = async (req, res) => {
	const { title, author, description } = req.body;
	const newBlog = await Blog.create({ title, author, description });
	res.json({
		message: "Blog created successfully",
		blog: newBlog,
	});
};

const getBlogById = async (req, res) => {
	const { id } = req.params;
	const blog = await Blog.findById(id);
	res.json({
		message: `Get blog with ID: ${id}`,
		blog,
	});
};

const deleteBlog = async (req, res) => {
	try {
		const { id } = req.params;
		await Blog.findByIdAndDelete(id);
		res.json({
			message: `Delete blog with ID: ${id}`,
		});
	} catch (error) {
		res.status(500).json({
			message: "Error deleting blog",
			error: error.message,
		});
	}
};

const updateBlog = async (req, res) => {
	const { id } = req.params;
	const { title, author, description } = req.body;
	const updatedBlog = await Blog.findByIdAndUpdate(
		id,
		{ title, author, description },
		{ new: true },
	);
	res.json({
		message: `Update blog with ID: ${id}`,
		blog: updatedBlog,
	});
};
export { getBlogs, createBlog, getBlogById, deleteBlog, updateBlog };
