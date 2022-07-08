const pick = require('../utils/pick');
const parentService = require('../services/parent.services');

const createParent = async (req, res) => {
  const parent = await parentService.createParent(req.body);
  res.status(200).send(parent);
};

const getParents = async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
//   options.populate = "parent";
  const result = await parentService.queryParents(filter, options);
  res.send(result);
};

const getParent = async (req, res) => {
  const parent = await parentService.getParentById(req.params.parentId);
  if (!parent) {
    res.status(404).json({ message: 'Parent not found'});
  }
  res.send(parent);
};

const updateParent = async (req, res) => {
  const parent = await parentService.updateParentById(req.params.parentId, req.body);
  res.send(parent);
};

const deleteParent = async (req, res) => {
  await parentService.deleteParentById(req.params.parentId);
  res.status(200).send();
};

module.exports = {
  createParent,
  getParents,
  getParent,
  updateParent,
  deleteParent,
};