import * as Controller from './invoice.admin.controller';
import * as Validator from './invoice.admin.validation';

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'DELETE',
      path: '/admin/invoice/{id}',
      config: {
        description: 'DELETE invoice',
        notes: 'DELETE invoice',
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
      path: '/admin/invoice/{id}',
      config: {
        description: 'PUT invoice',
        notes: 'PUT invoice',
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
      path: '/admin/invoice',
      config: {
        description: 'POST invoice',
        notes: 'POST invoice',
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
  name: 'invoice-admin-route',
  version: '1.0.0'
};
