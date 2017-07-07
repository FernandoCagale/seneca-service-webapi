const Seneca = require('seneca');

Seneca({
  tag: 'webapi'
}).use('consul-registry', {
  host: process.env.CONSUL_ADDR || '127.0.0.1'
}).use('seneca-mesh', {
  listen: [{
    host: process.env.ADDR || '127.0.0.1',
    port: process.env.PORT || 50000 + Math.floor((10000 * Math.random()))
  }],
  discover: {
    registry: {
      active: true
    },
    multicast: {
      active: false
    },
    guess: {
      active: false
    }
  }
}).ready(function () {
  const seneca = this;
  require('./src/core/bootstrap').start(seneca);
});
