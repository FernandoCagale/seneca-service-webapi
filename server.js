const Seneca = require('seneca');

Seneca({tag: 'api'})
  .client({
    pin: 'role:order,cmd:*',
    port: 9001
  })
  .client({
    pin: 'role:auth,cmd:*',
    port: 9002
  })
  .client({
    pin: 'role:invoice,cmd:*',
    port: 9003
  })
  .ready(function () {
    const seneca = this;
    require('./src/core/bootstrap').start(seneca);
  });
