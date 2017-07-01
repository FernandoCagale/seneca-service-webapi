const Seneca = require('seneca');

Seneca({
  tag: 'base'
}).use('consul-registry', {
  host: process.env.ADDR || '127.0.0.1'
}).use('seneca-mesh', {
  discover: {
    registry: {
      active: true
    },
    multicast: {
      active: false
    }
  }
}).ready(function () {
  const seneca = this;
  require('./src/core/bootstrap').start(seneca);
});
