const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const postSchema = new Schema({
	restaurant: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	website: {
		type: String,
		required: false
	},
	experience: {
		type: String,
		required: true
	},
	photo: {
		type: String,
		default: 'https://i.imgur.com/W4ska4Z.jpg' // default image
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
},{
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);