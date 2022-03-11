const Post = require('../../models/post')


module.exports = {
	create,
	getAll,
	

}




async function create(req, res) {
	const post = await Post.create(req.body);
	console.log(post);
	// post.user = req.body.user;
	// req.body.photo = await uploadFile(req.file);
	// post.save();
	res.json(post);
}

async function getAll(req, res) {
	const posts = await Post.find({})
	res.json(posts);
}







