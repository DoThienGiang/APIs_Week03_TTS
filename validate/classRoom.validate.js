const Joi = require ("Joi")

const createClass = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        numOfStudent: Joi.number().required(),

    }),
};

const getClasses = {
    query: Joi.object().keys({
        name: Joi.string(),
        numOfStudent: Joi.number(),

    }),
};

const updateClass = {
    body: Joi.object().keys({
        name: Joi.string(),
        numOfStudent: Joi.number(),

    }),
};

export { createClass, getClasses, updateClass};
