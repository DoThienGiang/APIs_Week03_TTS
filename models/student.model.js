const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: { type: String, required: true },
	age: { type: Number, required: true },
	gender: { type: String, required: true }
});

// Export the model
module.exports = mongoose.model('Student', StudentSchema);