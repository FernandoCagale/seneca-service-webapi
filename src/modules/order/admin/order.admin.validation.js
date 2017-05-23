import * as Schema from '../order.schema';

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
