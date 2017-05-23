import * as Schema from '../user.schema';

const schema = Schema.getSchema();

export function read () {
  return {
    params: {
      id: schema
        .id
        .required()
    }
  };
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
    params: {
      id: schema
        .id
        .required()
    },
    payload: {
      name: schema
        .name
        .optional(),
      email: schema
        .email
        .required(),
      password: schema
        .password
        .optional()
    }
  };
}
