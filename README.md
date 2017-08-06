# seneca-service-webapi

[![js-semistandard-style](https://cdn.rawgit.com/flet/semistandard/master/badge.svg)](https://github.com/Flet/semistandard)

Implementation of a micro-service prototype

- Nodejs
  - senecajs
  - hapijs
- JWT
- Swagger
- MongoDB
- Redis
- Rabbitmq
- API Gateway
- Nginx
- Consul
- Docker
- TDD
- Gitlab-CI
- Digital Ocean

* **Auth** Service responsible for authentication of services
* **Order** Service responsible for all requirements related to an Order
  * When an Order is generated, it is necessary to launch an Invoice for the registered order, this process is done by queue (rabbitmq). That adds in the queue the information of the registered order.

* **Invoice** Service responsible for all requirements related to an Invoice
  * Consume the queue (rabbitmq) of Orders that are registered to start the Invoice

All the above services are with tests implemented and the environment configured to run using docker.

* **Webapi** Service (API Gateway), reponsible for providing the services described above, with their proper permissions.

Environment configured for testing and deploy with docker in gitlab through Makefile and a simple deploy Digital Ocean.

Flow:

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

![alt tag](https://github.com/FernandoCagale/seneca-service-webapi/blob/master/img/DocumentationAPI.png)

[travis-badge-auth]: https://travis-ci.org/FernandoCagale/seneca-service-auth.svg?branch=master
[travis-url-auth]: https://travis-ci.org/FernandoCagale/seneca-service-auth

[travis-badge-order]: https://travis-ci.org/FernandoCagale/seneca-service-order.svg?branch=master
[travis-url-order]: https://travis-ci.org/FernandoCagale/seneca-service-order

[travis-badge-invoice]: https://travis-ci.org/FernandoCagale/seneca-service-invoice.svg?branch=master
[travis-url-invoice]: https://travis-ci.org/FernandoCagale/seneca-service-invoice
