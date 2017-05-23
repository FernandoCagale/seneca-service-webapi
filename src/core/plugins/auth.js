import jwt from 'hapi-auth-jwt2';
import jsonWebToken from 'jsonwebtoken';

const key = process.env.JWT || 'template';

exports.register = (server, options, next) => {
  server.register(jwt, registerAuth);

  function registerAuth (err) {
    if (err) { return next(err); }

    server.auth.strategy('jwt', 'jwt', {
      key: key,
      validateFunc: validate,
      verifyOptions: {algorithms: [ 'HS256' ]}
    });

    server.auth.default({
      strategy: 'jwt',
      scope: ['admin']
    });

    return next();
  }

  function validate (decoded, request, cb) {
    const token = request.headers.authorization.replace('Bearer ', '');
    const pattern = {role: 'auth', cmd: 'getToken', token: token};

    return request.seneca.act(pattern, (err, response) => {
      if (err || !response.ok) return cb(null, false);
      jsonWebToken.verify(token, key, (err, decoded) => {
        if (err) {
          return cb(null, false);
        }
        return cb(null, true);
      });
    });
  }
};

exports.register.attributes = {
  name: 'auth-jwt',
  version: '1.0.0'
};
