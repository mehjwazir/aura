import mongoose from "mongoose";
const Schema = mongoose.Schema;


const experienceSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	Location: {
		type: String,
		required: false
	},
	Website: {
		type: String,
		required: false
	},
	Experience: {
		type: String,
		required: true
	},
	// Photo: {
		
	// },
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	userName: String,
	userAvatar: String
},{
    timestamps: true
});

module.exports = mongoose.model('Experience', experienceSchema);