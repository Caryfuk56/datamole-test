const jsonServer = require("json-server");
const express = require("express");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(jsonServer.bodyParser);

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
