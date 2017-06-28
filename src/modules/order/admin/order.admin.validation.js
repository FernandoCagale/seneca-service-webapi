'use strict';

const Schema = require('../order.schema');

const schema = Schema.getSchema();

module.exports = {
  destroy: destroy,
  create: create,
  update: update
};

function destroy () {
  return {
    params: {
      id: schema
        .id
        .required()
    }
  };
}

function create () {
  return {
    payload: {
      client: schema
        .client
        .required(),
      price: schema
        .price
        .required(),
      emission: schema
        .emission
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
      client: schema
        .client
        .required(),
      price: schema
        .price
        .required(),
      emission: schema
        .emission
        .required()
    }
  };
}
