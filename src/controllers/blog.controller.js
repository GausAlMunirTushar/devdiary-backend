const getBlogs = (req, res) => {
	res.json({
		message: "Get all blogs",
	});
};

const createBlog = (req, res) => {
	res.json({
		message: "Create a new blog",
	});
};

const getBlogById = (req, res) => {
	const { id } = req.params;
	res.json({
		message: `Get blog with ID: ${id}`,
	});
}


export { getBlogs, createBlog, getBlogById };
