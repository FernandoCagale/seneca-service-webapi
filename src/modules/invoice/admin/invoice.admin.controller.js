'use strict';

module.exports = {
  destroy: destroy,
  create: create,
  update: update
};

async function create (request, reply) {
  try {
    const payload = request.payload;
    const pattern = {role: 'invoice', cmd: 'create', orderId: payload.orderId, emission: payload.emission, price: payload.price, client: payload.client};

    request.seneca.log.info('POST INVOICE', payload);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      return reply(response.invoice);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}

async function update (request, reply) {
  try {
    const id = request.params.id;
    const payload = request.payload;
    const pattern = {role: 'invoice', cmd: 'update', id: id, orderId: payload.orderId, emission: payload.emission, price: payload.price, client: payload.client};

    request.seneca.log.info('PUT INVOICE', payload);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.notFound(response.why);
      return reply(response.invoice);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}

async function destroy (request, reply) {
  try {
    const id = request.params.id;
    const pattern = {role: 'invoice', cmd: 'remove', id: id};

    request.seneca.log.info('DELETE INVOICE', id);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.notFound(response.why);
      return reply();
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}
