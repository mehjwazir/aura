const Post = require('../../models/post');
const uploadFile = require('../../config/upload-file');


module.exports = {
	create,
	getAll,
	getAllUserPost,
	deletePost,
	editPost,
	// show
	
}




async function create(req, res) {
	req.body.user = req.user._id;
	if (req.file) {
		req.body.photo = await uploadFile(req.file);
	}
	const post = await Post.create(req.body);
	console.log(post);
	res.json(post);
}



async function getAll(req, res) {
	const posts = await Post.find({}).populate("user");
	res.json(posts);
}


async function getAllUserPost(req, res) {
	const posts = await Post.find({ user: req.user._id }).populate("user");
	console.log('please work');
	res.json(posts);
}



async function deletePost(req,res) {
   const deletedPost = await Post.findByIdAndDelete(req.params.id);
  res.json(deletedPost);
}



async function editPost(req,res) {
	const editPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
	console.log('heyyy');
	console.log(req.body);
	res.json(editPost);
	
}

// async function show(req, res) {
//   const post = await Post.findById(req.params.id).populate("user");
//   res.json(post);
// }