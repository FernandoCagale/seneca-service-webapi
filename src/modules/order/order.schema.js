'use strict';

const Joi = require('joi');

module.exports = {
  getSchema: getSchema
};

const schema = {
  id: Joi
    .string(),
  client: Joi
    .string()
    .min(1)
    .max(120)
    .trim(),
  price: Joi
    .number()
    .integer()
    .precision(2),
  emission: Joi
    .date()
};

function getSchema () {
  return schema;
}
