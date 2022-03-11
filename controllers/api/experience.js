const Experience = require('../../models/experience')


module.exports = {
	create,
	update,
	delete: deleteExperience,
	getAll

}

async function create(req, res) {
	const experience = await Experience.create(req.body);
	console.log(experience);
	// experience.user = req.body.user;
	experience.save();
	res.json(experience);
}





async function deleteExperience(req, res) {
	await Experience.findByIdAndDelete(req.params.id);
	const newExperience = await Experience.find({}).populate('experience.').populate('user').exec();
	res.json(newExperience);
}



async function update(req, res) {
	const experience = await Experience.findByIdAndUpdate(req.params.id, req.body, { new: true });
	res.json(experience);
}

async function getAll(req, res) {
	const experiences = await Experience.find({})
	res.json(experiences);
}



