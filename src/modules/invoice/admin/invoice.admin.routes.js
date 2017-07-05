const Controller = require('./invoice.admin.controller');
const Validator = require('./invoice.admin.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'DELETE',
      path: '/invoice/{id}',
      config: {
        description: 'DELETE invoice',
        notes: 'DELETE invoice',
        tags: ['api', 'invoice'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.destroy,
        validate: Validator.destroy()
      }
    },
    {
      method: 'PUT',
      path: '/invoice/{id}',
      config: {
        description: 'PUT invoice',
        notes: 'PUT invoice',
        tags: ['api', 'invoice'],
        auth: {
          scope: ['admin']
        },
        handler: Controller.update,
        validate: Validator.update()
      }
    },
    {
      method: 'POST',
      path: '/invoice',
      config: {
        description: 'POST invoice',
        notes: 'POST invoice',
        tags: ['api', 'invoice'],
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
  name: 'invoice-admin-route',
  version: '1.0.0'
};
