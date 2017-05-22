import * as Schema from '../user.schema';

const schema = Schema.getSchema();

export function read () {
  return {};
}

export function logout () {
  return {};
}

export function login () {
  return {
    payload: {
      email: schema
        .email
        .required(),
      password: schema
        .password
        .required()
    }
  };
}

export function create () {
  return {
    payload: {
      name: schema
        .name
        .required(),
      email: schema
        .email
        .required(),
      password: schema
        .password
        .required()
    }
  };
}

export function update () {
  return {
    payload: {
      name: schema
        .name
        .required(),
      email: schema
        .email
        .required(),
      password: schema
        .password
        .optional()
    }
  };
}
