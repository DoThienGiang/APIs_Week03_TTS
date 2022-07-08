const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: { type: String, required: true },
	age: { type: String, required: true },
	gender: { type: String, required: true },
	classRoom: {
		type: mongoose.SchemaTypes.ObjectId,
		ref: "ClassRoom",
	},
	parent: [
		{
		  type: mongoose.SchemaTypes.ObjectId,
		  ref: "Parent",
		},
	]  ,
});

const student = mongoose.model('Student', studentSchema);
module.exports = student