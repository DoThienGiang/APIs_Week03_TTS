const  ClassRoom  = require('../models/classRoom.model');


const createClassRoom = async (classRoomBody) => {
  return await ClassRoom.create(classRoomBody);
};
const queryClassRooms = async (filter, options) => {
  const classRooms = await ClassRoom.find(filter, options);
  return classRooms;
};

const getClassRoomById = async (id) => {
  return ClassRoom.findById(id);
};


const updateClassRoomById = async (classRoomId, updateBody) => {
  const classRoom = await getClassRoomById(classRoomId);
  if (!classRoom) {
    res.status(404).json({ message: 'ClassRoom not found'});
  }
  Object.assign(classRoom, updateBody);
  await classRoom.save();
  return classRoom;
};

const deleteClassRoomById = async (classRoomId) => {
  const classRoom = await getClassRoomById(classRoomId);
  if (!classRoom) {
    res.status(404).json({ message: 'ClassRoom not found'});
  }
  await classRoom.remove();
  return classRoom;
};

module.exports = {
  createClassRoom,
  queryClassRooms,
  getClassRoomById,
  updateClassRoomById,
  deleteClassRoomById,
};