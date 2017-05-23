import Joi from 'joi';

const schema = {
  id: Joi
    .string(),
  orderId: Joi
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

const query = {
  page: Joi
    .number()
    .integer()
    .optional(),
  limit: Joi
    .number()
    .integer()
    .min(0)
    .optional()
};

export function getSchema () {
  return schema;
}

export function getQuery () {
  return query;
}
