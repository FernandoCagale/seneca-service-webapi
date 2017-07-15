'use strict';

const seneca = require('seneca')({base: 'webapi'});
const mesh = require('seneca-mesh');
const consul = require('seneca-consul-registry');

const opts = {
  mesh: {
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
  },
  consul: {
    host: process.env.CONSUL_ADDR || '127.0.0.1'
  }
};

seneca.use(consul, opts.consul);
seneca.use(mesh, opts.mesh).ready(function () {
  require('./src/core/bootstrap').start(this);
});
