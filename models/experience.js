const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const experienceSchema = new Schema({
	restaurant: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: false
	},
	website: {
		type: String,
		required: false
	},
	experience: {
		type: String,
		required: true
	},
	photos: {
		type: [String]
	},
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	userName: String,
	userAvatar: String
},{
    timestamps: true
});

module.exports = mongoose.model('Experience', experienceSchema);