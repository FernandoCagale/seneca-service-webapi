import Promise from 'bluebird';
import path from 'path';
import server from './server';
import * as core from './util/core-function';

const fs = Promise.promisifyAll(require('fs'));

module.exports = {start};

function start (seneca) {
  server.decorate('server', 'seneca', seneca);

  return Promise.resolve()
  .then(() => {
    console.log('===> load core plugins');

    const dir = path.join(__dirname, '/plugins');

    return fs.readdirAsync(dir)
    .filter(core.filterProduction)
    .map((file) => {
      return {
        register: require(path.join(dir, file))
      };
    })
    .then(registerToServer)
    .catch((err) => {
      console.log('==> Error load core plugins', err);
      throw err;
    });
  })
  .then(() => {
    console.log('===> load plugins routes');

    return fs.readdirAsync(path.join(__dirname, '..'))
      .filter(core.filterCoreDirectories)
      .map((dir) => {
        return {
          register: require(path.join(__dirname, '..', dir))
        };
      })
      .then(registerToServer)
      .catch((err) => {
        console.log('===> Error load plugins routes', err);
        throw err;
      });
  })
  .then(() => {
    server.start((err) => {
      if (err) {
        throw err;
      }

      console.log('info', 'Server running at: ' + server.info.uri);
    });
  })
  .catch((err) => {
    console.log('===> App Error' + err);
    throw err;
  });
}

function registerToServer (plugins) {
  return new Promise((resolve, reject) => {
    server.register(plugins, (err) => {
      if (err) {
        return reject(err);
      }

      return resolve();
    });
  });
}
