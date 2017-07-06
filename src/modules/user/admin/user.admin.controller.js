'use strict';

module.exports = {
  create: create,
  update: update,
  read: read,
  login: login,
  logout: logout
};

async function create (request, reply) {
  try {
    const payload = request.payload;
    const pattern = {role: 'auth', cmd: 'create', email: payload.email, name: payload.name, password: payload.password};

    request.seneca.log.info('POST AUTH', payload);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      return reply({token: response.token});
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}

async function read (request, reply) {
  try {
    const token = request.headers.authorization.replace('Bearer ', '');
    console.log(token);
    const pattern = {role: 'auth', cmd: 'findById', token: token};

    request.seneca.log.info('GET AUTH ID', token);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.badRequest(response.why);
      return reply({user: response.auth});
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}

async function update (request, reply) {
  try {
    const token = request.headers.authorization.replace('Bearer ', '');
    const payload = request.payload;
    const pattern = {role: 'auth', cmd: 'update', token: token, email: payload.email, name: payload.name, password: payload.password};

    request.seneca.log.info('PUT AUTH', payload);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.badRequest(response.why);
      return reply(response.auth);
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}

async function login (request, reply) {
  try {
    const payload = request.payload;
    const pattern = {role: 'auth', cmd: 'login', email: payload.email, password: payload.password};

    request.seneca.log.info('LOGIN', payload);

    return request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      if (!response.ok) return reply.badRequest(response.why);
      return reply({token: response.token});
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}

async function logout (request, reply) {
  try {
    const token = request.headers.authorization.replace('Bearer ', '');
    const pattern = {role: 'auth', cmd: 'logout', token: token};

    request.seneca.log.info('LOGOUT');

    request.seneca.act(pattern, (err, response) => {
      if (err) return reply.badImplementation(err);
      return reply({ok: true});
    });
  } catch (err) {
    return reply.badImplementation(err);
  }
}
