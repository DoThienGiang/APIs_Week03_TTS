const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ClassSchema = new Schema({
	name: { type: String, required: true },
	numOfStudent: { type: Number, required: true },
	student: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Student',
	}

});

// Export the model
module.exports = mongoose.model('Class', ClassSchema);