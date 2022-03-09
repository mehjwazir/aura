const Experience = require('../../models/experience');


module.exports = {
	create,
	update,
	delete: deleteExperience
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



async function create(req, res) {
	const experience = new Experience();
	experience.restaurant = req.body.restaurant;
	experience.location = req.body.location;
	experience.website = req.body.website;
	experience.experience = req.body.experience;
	await experience.save();
	res.json(experience);
}

