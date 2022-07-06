const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ParentSchema = new Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	gender: { type: String, required: true },
	student: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Student',
	}
});

// Export the model
module.exports = mongoose.model('Parent', ParentSchema);