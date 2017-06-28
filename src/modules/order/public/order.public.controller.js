'use strict';

module.exports = {
  list: list,
  read: read
};

async function read (request, reply) {
  try {
    const pattern = {role: 'order', cmd: 'findById', id: request.params.id};

    request.seneca.log.info('GET ORDER', {id: request.params.id});

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.notFound(response.why);
      return reply(response.order);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}

async function list (request, reply) {
  try {
    const pattern = {role: 'order', cmd: 'findAll'};

    request.seneca.log.info('LIST ORDERS');

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      return reply(response.orders);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}
