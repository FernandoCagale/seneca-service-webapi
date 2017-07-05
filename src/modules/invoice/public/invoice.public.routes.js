const Controller = require('./invoice.public.controller');
const Validator = require('./invoice.public.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/invoice/{id}',
      config: {
        description: 'GET invoice',
        notes: 'GET id invoice',
        tags: ['api', 'invoice'],
        auth: false,
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'GET',
      path: '/invoice',
      config: {
        description: 'GET invoice',
        notes: 'GET invoice',
        tags: ['api', 'invoice'],
        auth: false,
        handler: Controller.list,
        validate: Validator.list()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'invoice-public-route',
  version: '1.0.0'
};
