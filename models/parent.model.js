const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let parentSchema = new Schema({
	name: { type: String, required: true },
	age: { type: String, required: true },
	gender: { type: String, required: true }
});

// Export the model
const parent = mongoose.model('Parent', parentSchema);
module.exports = parent