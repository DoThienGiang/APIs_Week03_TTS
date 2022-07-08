const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let classRoomSchema = new Schema({
	name: { type: String, required: true },
	numOfStudent: { type: Number, required: true }
})

// Export the model 
const classRoom = mongoose.model('ClassRoom', classRoomSchema);
module.exports = classRoom