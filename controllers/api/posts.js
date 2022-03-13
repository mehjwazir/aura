const Post = require('../../models/post')


module.exports = {
	create,
	getAll,
	getAllUserPost,
	deletePost,
	
}




async function create(req, res) {
	req.body.user = req.user._id;
	const post = await Post.create(req.body);
	console.log(post);
	// post.user = req.body.user;
	// req.body.photo = await uploadFile(req.file);
	// post.save();
	res.json(post);
}



async function getAll(req, res) {
	const posts = await Post.find({});
	res.json(posts);
}


async function getAllUserPost(req, res) {
	const posts = await Post.find({ user: req.user._id })
	res.json(posts);
}



async function deletePost(req,res) {
   const deletedPost = await Post.findByIdAndDelete(req.params.id).populate("user");
  res.json(deletedPost);
}

