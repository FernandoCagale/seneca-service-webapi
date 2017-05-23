import * as Schema from '../invoice.schema';

const schema = Schema.getSchema();

export function destroy () {
  return {
    params: {
      id: schema
        .id
        .required()
    }
  };
}

export function create () {
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

export function update () {
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
