import Joi from 'joi';

const schema = {
  id: Joi
    .number()
    .integer()
    .min(0),
  name: Joi
    .string()
    .max(120)
    .trim(),
  email: Joi
    .string()
    .email(),
  password: Joi
    .string()
    .min(8)
    .max(60)
    .trim()
    .regex(/(?=[\s\S]*[a-z][\s\S]*)(?=[\s\S]*[0-9][\s\S]*)/i, 'strong password')
};

export function getSchema () {
  return schema;
}
