const Controller = require('./order.public.controller');
const Validator = require('./order.public.validation');

exports.register = (server, options, next) => {
  server.route([
    {
      method: 'GET',
      path: '/order/{id}',
      config: {
        description: 'GET order',
        notes: 'GET id order',
        tags: ['api', 'public'],
        auth: false,
        handler: Controller.read,
        validate: Validator.read()
      }
    },
    {
      method: 'GET',
      path: '/order',
      config: {
        description: 'GET order',
        notes: 'GET order',
        tags: ['api', 'public'],
        auth: false,
        handler: Controller.list,
        validate: Validator.list()
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'order-public-route',
  version: '1.0.0'
};
