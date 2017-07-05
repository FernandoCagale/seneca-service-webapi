# seneca-service-webapi

[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)

![alt tag](https://github.com/FernandoCagale/seneca-service-webapi/blob/master/img/WebAPI.png)

```sh
$ npm install
```

`Starting MongoDB server`

```sh
$ docker run --name mongo -d -p 27017:27017 mongo
```

`Starting RabbitMQ server`

```sh
$ docker run --name rabbitmq -d -p 5672:5672 rabbitmq:alpine
```

`Starting Redis server`

```sh
$ docker run --name redis -d -p 6379:6379 smebberson/alpine-redis
```

`Starting Consul`

```sh
$ docker run -p 8400:8400 -p 8500:8500 -p 8600:53/udp -h node1 progrium/consul -server -bootstrap`
```

`Run the services:`

* **base** [seneca-service-base](https://github.com/FernandoCagale/seneca-service-base)
* **auth** [seneca-service-auth](https://github.com/FernandoCagale/seneca-service-auth) [![Build Status][travis-badge-auth]][travis-url-auth]
* **invoice** [seneca-service-invoice](https://github.com/FernandoCagale/seneca-service-invoice) [![Build Status][travis-badge-invoice]][travis-url-invoice]
* **order** [seneca-service-order](https://github.com/FernandoCagale/seneca-service-order) [![Build Status][travis-badge-order]][travis-url-order]

```sh
$ npm start
```

`http://localhost:3000/documentation`

[travis-badge-auth]: https://travis-ci.org/FernandoCagale/seneca-service-auth.svg?branch=master
[travis-url-auth]: https://travis-ci.org/FernandoCagale/seneca-service-auth

[travis-badge-order]: https://travis-ci.org/FernandoCagale/seneca-service-order.svg?branch=master
[travis-url-order]: https://travis-ci.org/FernandoCagale/seneca-service-order

[travis-badge-invoice]: https://travis-ci.org/FernandoCagale/seneca-service-invoice.svg?branch=master
[travis-url-invoice]: https://travis-ci.org/FernandoCagale/seneca-service-invoice