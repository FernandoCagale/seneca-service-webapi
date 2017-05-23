export const read = async (request, reply) => {
  try {
    const pattern = {role: 'invoice', cmd: 'findById', id: request.params.id};

    request.seneca.log.info('GET INVOICE', {id: request.params.id});

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.notFound(response.why);
      return reply(response.invoice);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
};

export const list = async (request, reply) => {
  try {
    const pattern = {role: 'invoice', cmd: 'findAll'};

    request.seneca.log.info('LIST INVOICES');

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      return reply(response.invoices);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
};
