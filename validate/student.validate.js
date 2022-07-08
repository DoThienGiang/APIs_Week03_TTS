const Joi = require ("Joi")

const createStudent = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.string().required(),
    gender: Joi.string().required(),
  }),
};

const getStudents = {
  query: Joi.object().keys({
    name: Joi.string(),
    age: Joi.string(),
    gender: Joi.string(),
  }),
};

const updateStudent = {
  body: Joi.object().keys({
    name: Joi.string(),
    age: Joi.string(),
    gender: Joi.string(),
  }),
};





export { createStudent, getStudents, getStudent, updateStudent, deleteStudent };
