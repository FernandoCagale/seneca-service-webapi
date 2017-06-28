'use strict';

const Schema = require('../invoice.schema');

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
      orderId: schema
        .orderId
        .required(),
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
      orderId: schema
        .orderId
        .required(),
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
