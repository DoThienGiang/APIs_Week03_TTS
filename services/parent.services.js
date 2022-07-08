const  Parent  = require('../models/parent.model');


const createParent = async (parentBody) => {
  return await Parent.create(parentBody);
};
const queryParents = async (filter, options) => {
  const parents = await Parent.find(filter, options);
  return parents;
};

const getParentById = async (id) => {
  return Parent.findById(id);
};


const updateParentById = async (parentId, updateBody) => {
  const parent = await getParentById(parentId);
  if (!parent) {
    res.status(404).json({ message: 'Parent not found'});
  }
  Object.assign(parent, updateBody);
  await parent.save();
  return parent;
};

const deleteParentById = async (parentId) => {
  const parent = await getParentById(parentId);
  if (!parent) {
    res.status(404).json({ message: 'Parent not found'});
  }
  await parent.remove();
  return parent;
};

module.exports = {
  createParent,
  queryParents,
  getParentById,
  updateParentById,
  deleteParentById,
};