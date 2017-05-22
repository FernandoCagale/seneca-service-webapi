exports.register = (server, options, next) => {
  server.decorate('request', 'seneca', server.seneca);

  next();
};

exports.register.attributes = {
  name: 'seneca',
  version: '1.0.0'
};

