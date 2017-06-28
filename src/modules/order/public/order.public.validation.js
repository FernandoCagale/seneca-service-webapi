'use strict';

const Schema = require('../order.schema');

const schema = Schema.getSchema();

module.exports = {
  list: list,
  read: read
};

function list () {
  return {};
}

function read () {
  return {
    params: {
      id: schema
        .id
        .required()
    }
  };
}
