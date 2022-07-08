const Joi = require ("Joi")

const createParent = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.string().required(),
    gender: Joi.string().required(),
  }),
};

const getParents = {
  query: Joi.object().keys({
    name: Joi.string(),
    age: Joi.string(),
    gender: Joi.string(),
  }),
};



const updateParent = {
  body: Joi.object().keys({
    name: Joi.string(),
    age: Joi.string(),
    gender: Joi.string(),
  }),
};


export { createParent, getParents, updateParent};
