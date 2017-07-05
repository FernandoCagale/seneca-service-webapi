'use strict';

const Controller = require('./order.admin.controller');
const Validator = require('./order.admin.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'DELETE',
      path: '/order/{id}',
      config: {
        description: 'DELETE order',
        notes: 'DELETE order',
        tags: ['api', 'admin'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.destroy,
        validate: Validator.destroy()
      }
    },
    {
      method: 'PUT',
      path: '/order/{id}',
      config: {
        description: 'PUT order',
        notes: 'PUT order',
        tags: ['api', 'admin'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'POST',
      path: '/order',
      config: {
        description: 'POST order',
        notes: 'POST order',
        tags: ['api', 'admin'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.create,
        validate: Validator.create()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'order-admin-route',
  version: '1.0.0'
};
