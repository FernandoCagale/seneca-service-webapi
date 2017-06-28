'use strict';

const Schema = require('../user.schema');

const schema = Schema.getSchema();

module.exports = {
  create: create,
  update: update,
  read: read,
  login: login,
  logout: logout
};

function read () {
  return {
    params: {
      id: schema
        .id
        .required()
    }
  };
}

function logout () {
  return {};
}

function login () {
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

function create () {
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

function update () {
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
