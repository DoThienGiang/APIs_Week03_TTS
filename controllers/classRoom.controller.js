const pick = require('../utils/pick');
const classRoomService = require('../services/classRoom.services');

const createClassRoom = async (req, res) => {
  const classRoom = await classRoomService.createClassRoom(req.body);
  res.status(200).send(classRoom);
};

const getClassRooms = async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   options.populate = "classRoom";
  const result = await classRoomService.queryClassRooms(filter, options);
  res.send(result);
};

const getClassRoom = async (req, res) => {
  const classRoom = await classRoomService.getClassRoomById(req.params.classRoomId);
  if (!classRoom) {
    res.status(404).json({ message: 'ClassRoom not found'});
  }
  res.send(classRoom);
};

const updateClassRoom = async (req, res) => {
  const classRoom = await classRoomService.updateClassRoomById(req.params.classRoomId, req.body);
  res.send(classRoom);
};

const deleteClassRoom = async (req, res) => {
  await classRoomService.deleteClassRoomById(req.params.classRoomId);
  res.status(200).send();
};

module.exports = {
  createClassRoom,
  getClassRooms,
  getClassRoom,
  updateClassRoom,
  deleteClassRoom
};