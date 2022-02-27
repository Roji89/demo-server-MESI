var jsonServer = require("json-server");

var object = {
  products: [
    {
      id: 0,
      name: "starbucks",
      price: "10",
      image: "/assets/images/1.jpg",
    },
    {
      id: 1,
      name: "starbucks",
      price: "10",
      image: "/assets/images/2.jpg",
    },
    {
      id: 2,
      name: "starbucks",
      price: "10",
      image: "/assets/images/3.jpg",
    },
  ],
};

var router = jsonServer.router(object); // Express router
var server = jsonServer.create(); // Express server

server.use(router);
server.listen(3000);
