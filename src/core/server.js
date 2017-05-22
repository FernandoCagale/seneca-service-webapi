import Hapi from 'hapi';

let server = new Hapi.Server();

server.connection({
  host: process.env.SERVER_HOST || 'localhost',
  port: process.env.SERVER_PORT || '3000',
  routes: {
    cors: {
      credentials: true
    },
    validate: {
      options: {
        abortEarly: false
      }
    }
  }
});

export default server;
